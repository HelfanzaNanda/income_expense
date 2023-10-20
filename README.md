# Income Expense
Aplikasi Mini untuk melacak pengeluaran dan pemasukan seseorang, dibuat dengan Laravel + ReactJs


## Installation

buka terminal anda

```bash
git clone https://github.com/HelfanzaNanda/income_expense.git

# masuk project
cd income_expense

# install vendor
composer install

# copy .env.example jadi .env
cp .env.example .env

# generatae APP_KEY
php artisan key:generate
```

buka .env setting database anda
```bash
# DB_DATABASE
# DB_USERNAME
# DB_PASSWORD
```

buka lagi terminal anda, masuk keproject tersebut
```bash
# migrasi db dan data
php artisan migrate --seed


# npm
npm install
npm run dev

# running
php artisan serve
```
