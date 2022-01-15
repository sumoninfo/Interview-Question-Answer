<?php

namespace App\Http\Resources;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array|Arrayable
     */
    public function toArray($request): array
    {
        return [
            'id'      => $this->id,
            'name'    => $this->name,
            'address' => $this->address
        ];
    }
}
