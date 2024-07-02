<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\LiveConference;
use Carbon\Carbon;

class LiveConferenceController extends Controller
{
    public function show()
    {
        $today = Carbon::now()->toDateTimeString();
        $live = LiveConference::where('started_at', '<=', $today)
            ->whereNull('ended_at')
            ->first();

        if (! $live) {
            abort(404);
        }

        return view('pages.school.live', compact('live'));
    }
}
