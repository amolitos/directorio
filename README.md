# Setup

#### 1. Clonar repo

  
```
https://github.com/amolitos/directorio
```

#### 2. Instalar dependencias

```
composer install
```

```
npm i
```

#### 3. Configurar Laravel

```
cp .env.example .env
```

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

```
php artisan key:generate
```

```
php artisan migrate --seed
```

# Local dev

```
php artisan serve
```

```
npm run dev
```

```
http://localhost:8000
```

# Husky for Pre commit.
Before confirm commit on git, husky will check the styles and linter.
Please check the errors in terminal.

# Laravel Pint
#### Check code test
´´´
composer pint:test
´´´

#### Check Current changes
´´´
composer pint:current
´´´

#### Execute Laravel Pint (work for staged changes)
´´´
composer pint
´´´


