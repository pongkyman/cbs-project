<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = Order::all();
        return Inertia::render('Admin/Order/Index', [
            'orders' => $orders,
        ]);    
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:12',
            'email' => 'required|email',
            'location' => 'required|string|max:255',
            'needs' => 'required|string|max:255',
            'meetingDate' => 'required|date',
            'estimatedTime' => ['required', 'regex:/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/'],
        ]);
        $order = new Order();
        $order->name = $request->input('name');
        $order->phone_number = $request->input('phoneNumber');
        $order->email = $request->input('email');
        $order->location = $request->input('location');
        $order->needs = $request->input('needs');
        $order->meeting_date = $request->input('meetingDate');
        $order->estimated_time = $request->input('estimatedTime');
        $order->status = 1;
        $order->save();

        return redirect()->route('home')->with('success', 'Order created successfully.');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $order = Order::findOrFail($id);
        return Inertia::render('Admin/Order/Update', [
            'order' => $order,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $order = Order::findOrFail($id);
        $order->update($request->all());
        return redirect()->route('order.index')->with('success', 'Order updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $order = Order::findOrFail($id);
        $order->delete();
        return redirect()->back()->with('success', 'Order deleted successfully.');
    }

    public function updateStatus(Request $request, Order $order)
    {
        $request->validate([
            'status' => 'required|integer|in:' . implode(',', [Order::STATUS_NEW, Order::STATUS_ONGOING, Order::STATUS_DONE]),
        ]);

        $newStatus = $request->input('status');

        if (($order->status === Order::STATUS_NEW && $newStatus === Order::STATUS_ONGOING) ||
            ($order->status === Order::STATUS_ONGOING && $newStatus === Order::STATUS_DONE)) {
            $order->update(['status' => $newStatus]);
            return redirect()->route('order.index')->with('success', 'Order status updated successfully.');
        }

        return redirect()->route('order.index')->with('error', 'Invalid status transition.');
    }
}
