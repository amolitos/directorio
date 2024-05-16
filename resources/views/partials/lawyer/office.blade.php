<div class="card">
    <h3 class="font-bold">
        {{ $lawyer->profile->office ?? 'Ubicación' }}
    </h3>
    <ul class="flex flex-col gap-y-3 mt-5">
        <li>
            <i class="fa-solid fa-location-dot text-gray-500 mr-1"></i>
            @if ($lawyer->profile->street)
                {{ $lawyer->profile->street . ', ' }}
            @endif
            @if ($lawyer->profile->suburb)
                {{ $lawyer->profile->suburb . ', ' }}
            @endif
            {{ $lawyer->profile->city->name . ', ' . $lawyer->profile->state->name }}
        </li>
    </ul>
</div>
