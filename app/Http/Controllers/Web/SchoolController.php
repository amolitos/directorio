<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\LiveConference;
use App\Models\Video;
use Carbon\Carbon;

class SchoolController extends Controller
{
    public function index()
    {
        $videos = Video::orderBy('id', 'desc')->get();

        return view('pages.school.index', compact('videos'));
    }

    public function live()
    {
        $today = Carbon::now()->toDateTimeString();
        $live = LiveConference::where('started_at', '<=', $today)
            ->whereNull('ended_at')
            ->first();

        if (! $live) {
            abort(404);
        }

        return view('pages.school.live')->with('live', $live);
    }

    public function video($id)
    {
        $video = Video::find($id);

        if (! $video) {
            abort(404);
        }

        return view('pages.school.video')->with('video', $video);
    }
}
