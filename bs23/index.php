<?php
/*
//Test=============
class Problem
{
    public static function average($a, $b)
    {
        return ($a + $b) / 2;
    }
}

echo Problem::average(2, 5);

//=========11==========
function prependSum(array $array): int
{
    $sum = array_sum($array);
   return array_unshift($array, $sum);

    return $sum;
}

$array = array(1, 2, 3);
$sum   = prependSum($array);
dd($sum);
/*echo($sum . PHP_EOL);
print_r($array);*/


//================8==============
/*interface Reptile
{
    public function layEgg($type): ReptileEgg;
}

class FireDragon implements Reptile
{

    public function layEgg($type): ReptileEgg
    {
        return new ReptileEgg($type);
    }
}

class ReptileEgg
{
    public $reptileType;
    static $count;

    public function __construct(string $reptileType)
    {
        return $this->reptileType = $reptileType;
        if (self::$count == 0) {
            $count++;
            $this->hatch();
        } else {
            throw new Exception('More then one');
        }
    }

    public function hatch(): ?Reptile
    {
        return null;
    }
}

dd(new ReptileEgg('saaaa'));*/


/*class Hobbies
{
    public $hobbies = [];

    public function add(string $hobbyist, array $hobbies): void
    {
        $this->hobbies[$hobbyist] = $hobbies;
    }

    public function findAllHobbyists(string $hobby): array
    {
        $name = array();
        foreach ($this->hobbies as $key => $hob) {
            if (in_array($hobby, $hob)) {
                $name = $this->hobbies[$key];
            }
        }
        return $name;
    }
}

$hobbies = new Hobbies;
$hobbies->add('Steve', ['Fashion', 'Piano', 'Reading']);
$hobbies->add('Patty', ['Drama', 'Magic', 'Pets']);
$hobbies->add('Chad', ['Puzzles', 'Pets', 'Yoga']);
dd($hobbies->hobbies, $hobbies->findAllHobbyists('Yoga'));
echo implode(',', $hobbies->findAllHobbyists('Yoga'));*/


class CropRatio
{
    public $totalWeight;
    public $crops = [];

    public function add(string $name, int $cropWeight): void
    {
        $currentCropWeight = 0;
        if (!array_key_exists($name, $this->crops)) {
            $currentCropWeight  += $cropWeight;
            $this->crops[$name] = $currentCropWeight;
            $this->totalWeight  += $cropWeight;
        } else {
            $currentCropWeight  += $cropWeight;
            $this->crops[$name] = $currentCropWeight;
        }

    }

    public function proportion(string $name): float
    {
        return $this->crops[$name] / $this->totalWeight;
    }
}

$cropRatio = new CropRatio;
$cropRatio->add('Wheat', 4);
$cropRatio->add('Wheat', 5);
$cropRatio->add('Rice', 1);
dd($cropRatio->crops, $cropRatio->totalWeight);
echo "Wheat: " . $cropRatio->proportion('Wheat');



/*return DB::table('employees')
    ->leftJoin('tasks', 'employees.id', '=', 'tasks.authorId')
    ->leftJoin('tasks', 'employees.id', '=', 'tasks.assigneeId')
    ->select('employees.id', 'employees.name', 'tasks.authorId')->get();*/
