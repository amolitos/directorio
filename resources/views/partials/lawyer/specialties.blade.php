<div class="card">
    <h3 class="font-bold">
        Materias
    </h3>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
        @foreach ($lawyer->profile->specialties as $specialty)
            <li>
                <i class="fa-solid fa-trophy text-primary mr-1"></i>
                {{ ucfirst($specialty->name) }}
            </li>
        @endforeach
    </ul>
</div>
