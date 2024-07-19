<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AppointmentRequest;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index(Request $request)
    {
        $appointments = Appointment::orderby('id')
            ->where('user_id', $request->user()->id)
            ->get();

        return $appointments;
    }

    public function store(AppointmentRequest $request)
    {
        $user = $request->user();
        $request->merge(['user_id' => $user->id]);

        $appointment = Appointment::create($request->all());

        return $appointment;
    }

    public function update(AppointmentRequest $request, $id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->fill($request->all());
        $appointment->saveOrFail();

        return $appointment;
    }

    public function destroy($id)
    {
        $appointment = Appointment::findOrFail($id);
        $appointment->delete();

        return response()->json([
            'success' => true
        ]);
    }
}
