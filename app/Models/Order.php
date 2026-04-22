<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orderinfo';
    protected $primaryKey = 'orderinfo_id';
    public $timestamps = false;

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function items()
    {
        return $this->belongsToMany(Item::class, 'orderline', 'orderinfo_id', 'item_id');
    }
}