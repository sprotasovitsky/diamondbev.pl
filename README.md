# DiamondBev.pl - Multi-Sector Business Website

Профессиональный многоязычный сайт-презентация для диверсифицированного бизнеса, работающего в различных отраслях экономики.

## 🚀 Технологии

- **Next.js 14** - React фреймворк
- **TypeScript** - типизация
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации
- **Next-i18next** - интернационализация (PL/EN)
- **React Hook Form + Zod** - формы и валидация
- **Lucide React** - иконки

## 📋 Функциональность

- ✅ Многоязычность (польский и английский)
- ✅ Респонсивный дизайн
- ✅ SEO оптимизация
- ✅ Современные анимации
- ✅ Форма обратной связи
- ✅ Оптимизированная производительность
- ✅ Доступность (WCAG)

## 🎯 Бизнес-сферы

Сайт представляет компанию, работающую в следующих отраслях:

- **46.90.Z** - Sprzedaż hurtowa niewyspecjalizowana
- **10** - Produkcja artykułów spożywczych  
- **11** - Produkcja napojów
- **45** - Handel hurtowy i detaliczny pojazdami samochodowymi
- **46** - Handel hurtowy, z wyłączeniem handlu pojazdami samochodowymi
- **47** - Handel detaliczny, z wyłączeniem handlu detalicznego pojazdami samochodowymi
- **49** - Transport lądowy oraz transport rurociągowy
- **52** - Magazynowanie i działalność usługowa wspomagająca transport
- **73** - Reklama, badanie rynku i opinii publicznej
- **77** - Wynajem i dzierżawa

## 🛠 Установка и запуск

### 1. Клонирование и установка зависимостей

```bash
# Установка зависимостей
npm install

# Или с yarn
yarn install
```

### 2. Настройка переменных окружения

Создайте файл `.env.local`:

```bash
cp env.example .env.local
```

Отредактируйте `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://diamondbev.pl
NEXT_PUBLIC_GA_ID=your_google_analytics_id_here
```

### 3. Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### 4. Сборка для продакшена

```bash
npm run build
npm run start
```

## 📦 Деплоймент на Vercel

### Автоматический деплоймент через GitHub

1. **Загрузите код в Git репозиторий:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```

2. **Подключите репозиторий к Vercel:**
   - Зайдите на [vercel.com](https://vercel.com)
   - Нажмите "Import Project"
   - Выберите ваш репозиторий
   - Нажмите "Deploy"

3. **Настройте переменные окружения в Vercel:**
   - Перейдите в Settings → Environment Variables
   - Добавьте переменные из `.env.local`

### Ручной деплоймент через Vercel CLI

```bash
# Установка Vercel CLI
npm i -g vercel

# Деплоймент
vercel

# Для продакшена
vercel --prod
```

## 🌐 Настройка домена от GoDaddy

### 1. Добавление домена в Vercel

1. В панели Vercel: **Project Settings → Domains**
2. Нажмите **"Add"**
3. Введите `diamondbev.pl`
4. Vercel покажет необходимые DNS записи

### 2. Настройка DNS в GoDaddy

1. **Войдите в GoDaddy:** Мои домены → diamondbev.pl → Управление DNS

2. **Добавьте/измените записи:**

   **Для основного домена (diamondbev.pl):**
   ```
   Тип: A
   Имя: @
   Значение: 76.76.21.21 (IP от Vercel)
   TTL: 1 Hour
   ```

   **Для www (www.diamondbev.pl):**
   ```
   Тип: CNAME  
   Имя: www
   Значение: cname.vercel-dns.com
   TTL: 1 Hour
   ```

3. **Сохраните изменения**

### 3. Проверка подключения

1. Дождитесь обновления DNS (5-30 минут)
2. В Vercel нажмите **"Verify"** рядом с доменом
3. SSL сертификат будет выпущен автоматически

## 📝 Обновление контента

### Изменение контактной информации

Отредактируйте файлы переводов:
- `public/locales/pl/common.json`
- `public/locales/en/common.json`

Найдите секцию `contact.placeholder` и обновите:

```json
{
  "contact": {
    "placeholder": {
      "address": "Ваш адрес",
      "phone": "+48 ваш телефон", 
      "email": "ваш@email.pl",
      "hours": "Ваши часы работы"
    }
  }
}
```

### Изменение информации о компании

В тех же файлах найдите и отредактируйте:
- `hero` - главный экран
- `about` - о компании  
- `services` - описания услуг

## 🔧 Кастомизация

### Цветовая схема

Отредактируйте `tailwind.config.js`:

```js
colors: {
  primary: {
    // Ваши цвета
  },
  secondary: {
    // Ваши цвета
  }
}
```

### Добавление новых страниц

1. Создайте файл в `src/pages/`
2. Добавьте переводы в `public/locales/`
3. Обновите навигацию в `Header.tsx`

## 📊 Analytics и мониторинг

### Google Analytics

1. Получите GA Measurement ID
2. Добавьте в `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### SEO мониторинг

- Используйте Google Search Console
- Настройте мониторинг в Google PageSpeed Insights
- Проверьте структурированные данные через Google Rich Results Test

## 🚨 Поддержка и обслуживание

### Регулярные обновления

```bash
# Обновление зависимостей
npm update

# Проверка безопасности
npm audit
npm audit fix
```

### Мониторинг производительности

- Vercel автоматически предоставляет аналитику
- Используйте Lighthouse для проверки производительности
- Мониторьте Core Web Vitals

## 📞 Техническая поддержка

Для технических вопросов и обновлений обращайтесь к разработчику.

---

**Статус проекта:** ✅ Готов к продакшену  
**Последнее обновление:** Декабрь 2024