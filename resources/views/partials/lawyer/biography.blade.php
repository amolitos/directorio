@if ($lawyer->profile->biography !== '<p></p>')
    <div class="card">
        <h3 class="font-bold">
            Biografía profesional
        </h3>
        <div class="!text-gray-600 dark:!text-gray-400 overflow-hidden mt-5">
            {!! $lawyer->profile->biography !!}
        </div>
    </div>
@endif
