<div class="flex flex-col items-center gap-4 text-center">
    <div class="h-72 w-72 flex justify-center items-center"
        style="background-image: url({{ asset('images/profile.svg') }})">
        <img src="{{ $lawyer->profile->photo ? '/storage/' . $lawyer->profile->photo : '/images/user.jpg' }}" alt="Abogado"
            class="h-52 w-52 object-contain rounded-full select-none mr-2 mb-3">
    </div>
    <div>
        <h1 class="font-semibold text-2xl text-secondary dark:text-primary">
            {{ $lawyer->name }}
        </h1>
        <p class="text-primary mt-2">
            <span class="mr-2">
                5
            </span>
            @for ($i = 0; $i < 5; $i++)
                <i class="fa-solid fa-star mr-1"></i>
            @endfor
        </p>
        <form method="POST" action="" class="mt-4">
            <button type="submit" class="btn border-primary text-primary rounded-3xl">
                Favorito
            </button>
        </form>
    </div>
</div>
