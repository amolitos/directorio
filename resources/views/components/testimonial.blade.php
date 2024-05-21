@props(['name'])

<blockquote
    class="bg-white dark:bg-zinc-800 flex flex-col md:flex-row-reverse items-center md:justify-between gap-3 rounded-md shadow-sm p-5">
    {{-- <img src="{{ asset('images/user.jpg') }}" class="object-cover w-20 md:w-24 h-20 md:h-24 rounded-full"> --}}
    <div class="flex flex-col pr-8">
        <div class="relative pl-12">
            <i class="fa-solid fa-quote-left absolute left-0 text-4xl text-primary"></i>
            <p class="text-gray-500 dark:text-yellow-100 mt-2">
                {{ $slot }}
            </p>
        </div>
        <h3 class="pl-12 mt-3 text-base font-medium leading-5 text-gray-800 dark:text-gray-400 truncate">
            {{ $name }}
        </h3>
    </div>
</blockquote>
