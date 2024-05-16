<a href="{{ route('buscar.show', $abogado->id) }}" class="cursor-pointer">
    <div class="card p-5">
        <h2 class="font-bold text-2xl text-primary">
            {{ $abogado->name }}
        </h2>
        <div class="flex gap-2 mt-3">
            <div class="badge badge-primary">
                <i class="fa-solid fa-location-dot mr-2"></i>
                {{ $abogado->profile->entidad->name ?? 'Sin entidad' }},
                {{ $abogado->profile->city->name ?? 'Sin city' }}
            </div>
            <div class="badge badge-primary">
                <i class="fa-solid fa-graduation-cap mr-2"></i>
                {{ $abogado->profile->degree->name ?? 'Sin nivel de estudio' }}
            </div>
            <div class="badge badge-primary">
                <i class="fa-solid fa-chart-simple mr-2"></i>
                Años de experiencia:
                {{ $abogado->profile->experiencia ?? 'Nuevo' }}
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <div>
                <h5 class="font-semibold text-gray-700">
                    Materias
                </h5>
                {{-- <ul class="list-disc list-outside text-gray-600 ml-5">
                    @foreach ($abogado->profile->tagsWithType('specialties') as $specialty)
                        <li>
                            {{ $specialty->name }}
                        </li>
                    @endforeach
                </ul> --}}
            </div>
            <div>
                <h5 class="font-semibold text-gray-700">
                    Services
                </h5>
                {{-- <ul class="list-disc list-outside text-gray-600 ml-5">
                    @foreach ($abogado->profile->tagsWithType('services') as $servicio)
                        <li>
                            {{ $service->name }}
                        </li>
                    @endforeach
                </ul> --}}
            </div>
        </div>
    </div>
</a>
