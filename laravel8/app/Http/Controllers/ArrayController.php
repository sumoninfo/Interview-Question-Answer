<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class ArrayController extends Controller
{
    /**
     * get transfer to array function
     *
     * @param $function
     * @return mixed
     */
    public function index($function)
    {
        return $this->{$function}();
    }

    /**
     * @return array
     */
    public function add()
    {
        $array = Arr::add(['name' => 'Desk'], 'price', 100);

        // ['name' => 'Desk', 'price' => 100]

        $array = Arr::add(['name' => 'Desk', 'price' => null], 'price', 100);

        // ['name' => 'Desk', 'price' => 100]
    }

    /**
     * @return array
     */
    public function collapse()
    {
        return $array = Arr::collapse([[1, 2, 3], [4, 5, 6], [7, 8, 9], [11]]);

        // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    /**
     * @return array
     */
    public function crossJoin()
    {
        $matrix = Arr::crossJoin([1, 2], ['a', 'b']);

        /*
            [
                [1, 'a'],
                [1, 'b'],
                [2, 'a'],
                [2, 'b'],
            ]
        */

        $matrix = Arr::crossJoin([1, 2], ['a', 'b'], ['I', 'II']);

        /*
            [
                [1, 'a', 'I'],
                [1, 'a', 'II'],
                [1, 'b', 'I'],
                [1, 'b', 'II'],
                [2, 'a', 'I'],
                [2, 'a', 'II'],
                [2, 'b', 'I'],
                [2, 'b', 'II'],
            ]
        */
    }

    /**
     * @return array
     */
    public function divide()
    {
        [$keys, $values] = Arr::divide(['name' => 'Desk']);

        // $keys: ['name']

        // $values: ['Desk']
    }

    /**
     * @return array
     */
    public function dot()
    {
        $array = ['products' => ['desk' => ['price' => 100]]];

        return $flattened = Arr::dot($array);

        // ['products.desk.price' => 100]
    }

    /**
     * @return array
     */
    public function except()
    {
        $array = ['name' => 'Desk', 'price' => 100];

        return $filtered = Arr::except($array, ['price']);

        // ['name' => 'Desk']
    }

    /**
     * @return array
     */
    public function exists()
    {
        $array = ['name' => 'John Doe', 'age' => 17];

        $exists = Arr::exists($array, 'name');

        // true

        $exists = Arr::exists($array, 'salary');

        // false
    }

    /**
     * @return array
     */
    public function first()
    {
        $array = [100, 200, 300];

        return $first = Arr::first($array, function ($value, $key) {
            return $value >= 150;
        });

        // 200
    }

    /**
     * @return array
     */
    public function last()
    {
        $array = [100, 200, 300, 400, 110];

        return $last = Arr::last($array, function ($value, $key) {
            return $value >= 150;
        });

        // 300
    }

    /**
     * @return array
     */
    public function flatten()
    {
        $array = ['name' => 'Joe', 'languages' => ['PHP', 'Ruby']];

        return $flattened = Arr::flatten($array);

        // ['Joe', 'PHP', 'Ruby']
    }

    /**
     * @return array
     */
    public function forget()
    {
        $array = ['products' => ['desk' => ['price' => 100]]];

        Arr::forget($array, 'products.desk');

        // ['products' => []]
    }

    /**
     * @return array
     */
    public function get()
    {
        $array = ['products' => ['desk' => ['price' => 100]]];

        return $price = Arr::get($array, 'products.desk.price');

        // 100
    }

    /**
     * @return array
     */
    public function only()
    {
        $array = ['name' => 'Desk', 'price' => 100, 'orders' => 10];

       return $slice = Arr::only($array, ['name', 'price']);

        // ['name' => 'Desk', 'price' => 100]
    }

    /**
     * @return array
     */
    public function chunk()
    {
        $collection = collect([1, 2, 3, 4, 5, 6, 7]);

        $chunks = $collection->chunk(4);

        return $chunks->toArray();
    }
}
