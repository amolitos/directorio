@if ($lawyer->profile->services->count() > 0)
    <div class="card">
        <h3 class="font-bold">
            Servicios
        </h3>
        <ul class="flex flex-col gap-y-3 mt-5">
            @foreach ($lawyer->profile->services as $service)
                <li>
                    <i class="fa-solid fa-circle-check text-teal-600 mr-1"></i>
                    {{ ucfirst($service->name) }}
                </li>
            @endforeach
        </ul>
    </div>
@endif
