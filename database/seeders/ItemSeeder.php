<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Models\Item;
use App\Models\Stock;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(Faker $faker): void
    {
        for ($i = 0; $i < 30; $i++) {
            $item = new Item();
            $item->description = $faker->realText(20);
            $item->cost_price = $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 6);

            $item->sell_price = $faker->randomFloat($nbMaxDecimals = 2, $min = 0, $max = 6);
            $item->img_path = 'default.jpg';
            $item->save();

            $stock = new Stock;
            $stock->item_id = $item->item_id;
            $stock->quantity = 20;
            $stock->save();
        }
    }
}