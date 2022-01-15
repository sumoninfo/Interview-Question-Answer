<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class PostController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $query = Post::query();
        if ($request->filled('search')) {
            $query->where('title', 'LIKE', "%{$request->search}%");
        }
        $query = $query->latest()->paginate($request->get('per_page', config('constant.pagination')));
        return PostResource::collection($query);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param PostRequest $request
     * @return JsonResponse
     */
    public function store(PostRequest $request)
    {
        $post = new Post();
        $post->fill($request->all());
        $post->save();
        return $this->returnResponse("success", "Created successfully", new PostResource($post));
    }

    /**
     * Display the specified resource.
     *
     * @param Post $post
     * @return PostResource
     */
    public function show(Post $post)
    {
        return new PostResource($post);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param PostRequest $request
     * @param Post $post
     * @return JsonResponse
     */
    public function update(PostRequest $request, Post $post)
    {
        $post->fill($request->all());
        $post->update();
        return $this->returnResponse("success", "Updated successfully", $post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Post $post
     * @return JsonResponse
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return $this->returnResponse("success", "Deleted successfully");
    }
}
