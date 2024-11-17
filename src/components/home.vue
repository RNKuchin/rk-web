<template>
  <!-- Навигация -->
  <nav class="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <a href="/" class="text-xl font-bold gradient-text">RK-WEB</a>
        <div class="hidden md:flex space-x-8">
          <a
            href="#home"
            class="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
          >
            Главная
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#about"
            class="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
          >
            Обо мне
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#projects"
            class="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
          >
            Проекты
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
          <a
            href="#contact"
            class="text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
          >
            Контакты
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        </div>
        <button class="md:hidden text-gray-600">
          <i class="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  </nav>

  <!-- Главный экран -->
  <section
    id="home"
    class="min-h-screen flex items-center pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 text-center md:text-left">
          <span
            class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium mb-4"
          >
            Веб-разработчик
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Создаю <span class="gradient-text">цифровые</span> решения
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Превращаю идеи в современные веб-приложения с помощью передовых
            технологий
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#contact"
              class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Связаться со мной
            </a>
            <a
              href="#projects"
              class="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-50 transition duration-300 shadow-md hover:shadow-lg"
            >
              Смотреть работы
            </a>
          </div>
        </div>
        <div class="md:w-1/2 mt-12 md:mt-0">
          <div class="relative float-animation">
            <div
              class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20"
            ></div>
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              height="600"
              alt="Hero Image"
              class="relative rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Обо мне -->
  <section id="about" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-blue-600 font-medium">Познакомимся поближе</span>
        <h2 class="text-3xl font-bold text-gray-800 mt-2">Мои навыки и опыт</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
        >
          <div
            class="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300"
          >
            <i
              class="fas fa-code text-2xl text-blue-600 group-hover:text-white"
            ></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Frontend Разработка</h3>
          <p class="text-gray-600 mb-4">
            Создание современных и отзывчивых интерфейсов
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >Vue.js</span
            >
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >Tailwind</span
            >
          </div>
        </div>
        <div
          class="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
        >
          <div
            class="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300"
          >
            <i
              class="fas fa-server text-2xl text-blue-600 group-hover:text-white"
            ></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Backend Разработка</h3>
          <p class="text-gray-600 mb-4">
            Разработка надежных и масштабируемых серверных решений
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >Node.js</span
            >
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >Python</span
            >
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >MongoDB</span
            >
          </div>
        </div>
        <div
          class="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
        >
          <div
            class="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300"
          >
            <i
              class="fas fa-mobile-alt text-2xl text-blue-600 group-hover:text-white"
            ></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Отзывчивый Дизайн</h3>
          <p class="text-gray-600 mb-4">
            Адаптивная верстка для всех устройств
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >Mobile First</span
            >
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >CSS Grid</span
            >
            <span class="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >Flexbox</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Проекты -->
  <section id="projects" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-blue-600 font-medium">Мои работы</span>
        <h2 class="text-3xl font-bold text-gray-800 mt-2">Последние проекты</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Проект 1 -->
        <div
          class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="relative overflow-hidden">
            <img
              src="/planer.jpg"
              alt="Project 1"
              class="w-full transform group-hover:scale-110 transition duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex gap-2">
                  <span
                    class="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-sm"
                    >HTML</span
                  >
                  <span
                    class="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-sm"
                    >CSS</span
                  >
                  <span
                    class="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-sm"
                    >Vite</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3
              class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors"
            >
              Современный планер для подарка
            </h3>
            <p class="text-gray-600 mb-4">
              Ведите свои заметки и становитесь успешнее...
            </p>
            <a
              href="#"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Подробнее
              <i
                class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"
              ></i>
            </a>
          </div>
        </div>
        <div
          class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="relative overflow-hidden">
            <img
              src="/house.jpg"
              alt="Project 1"
              class="w-full transform group-hover:scale-110 transition duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex gap-2">
                  <span
                    class="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-sm"
                    >HTML</span
                  >
                  <span
                    class="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-sm"
                    >SCSS</span
                  >

                  <span
                    class="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-sm"
                    >Vite</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3
              class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors"
            >
              Реплики картин от Ink. House
            </h3>
            <p class="text-gray-600 mb-4">Сайт для репродкуции картин</p>
            <a
              href="https://rnkuchin.github.io/House/"
              target="_blank"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Подробнее
              <i
                class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"
              ></i>
            </a>
          </div>
        </div>
        <!-- Проект 2 -->
        <div
          class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="relative overflow-hidden">
            <img
              src="/to-do.jpg"
              alt="Project 2"
              class="w-full transform group-hover:scale-110 transition duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex gap-2">
                  <span
                    class="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-sm"
                    >Vue.js</span
                  >
                  <span
                    <span
                    class="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-sm"
                    >Docker</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3
              class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors"
            >
              Task Manager
            </h3>
            <p class="text-gray-600 mb-4">
              Приложение для управления задачами и проектами
            </p>
            <a
              href="https://rnkuchin.github.io/to-do-vue/"
              target="_blank"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Подробнее
              <i
                class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"
              ></i>
            </a>
          </div>
        </div>
        <!-- Проект 3 -->
        <div
          class="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <div class="relative overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/181894126/photo/bodybuilder-performing-power-lift-curl.jpg?s=1024x1024&w=is&k=20&c=qNHNU-WhzKV0S9Xp9AFrH7EbhSJ1kVovOXf02_UmUL4="
              alt="Project 3"
              class="w-full transform group-hover:scale-110 transition duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <div class="absolute bottom-4 left-4 right-4">
                <div class="flex gap-2">
                  <span
                    class="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-sm"
                    >React Native</span
                  >
                  <span
                    class="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-white text-sm"
                    >GraphQL</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3
              class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors"
            >
              Fitness App
            </h3>
            <p class="text-gray-600 mb-4">Сайт для фитнес тренера</p>
            <a
              href="rnkuchin.github.io/mike/"
              target="_blank"
              class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              Подробнее
              <i
                class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Статистика -->
  <section class="py-16 bg-blue-600">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
        <div class="p-4">
          <div class="text-4xl font-bold mb-2">2+</div>
          <div class="text-blue-100">Лет опыта</div>
        </div>
        <div class="p-4">
          <div class="text-4xl font-bold mb-2">30+</div>
          <div class="text-blue-100">Проектов</div>
        </div>
        <div class="p-4">
          <div class="text-4xl font-bold mb-2">20+</div>
          <div class="text-blue-100">Клиентов</div>
        </div>
        <div class="p-4">
          <div class="text-4xl font-bold mb-2">100%</div>
          <div class="text-blue-100">Довольных клиентов</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Контакты -->
  <section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-blue-600 font-medium">Свяжитесь со мной</span>
        <h2 class="text-3xl font-bold text-gray-800 mt-2">
          Давайте обсудим ваш проект
        </h2>
      </div>
      <div class="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Контактная информация -->
        <div class="space-y-8">
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0"
            >
              <i class="fas fa-envelope text-blue-600"></i>
            </div>
            <a href="mailto:roman.kuchin@mail.com">
              <h3 class="text-lg font-semibold mb-1">Email</h3>
              <p class="text-gray-600">roman.kuchin@mail.com</p>
            </a>
          </div>
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0"
            >
              <i class="fas fa-phone text-blue-600"></i>
            </div>
            <h3 class="text-lg font-semibold mb-1">
              <a href="https://t.me/R_o_m_a_n_it">Telegram</a>
            </h3>
          </div>
          <div class="flex items-start space-x-4">
            <div
              class="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0"
            >
              <i class="fas fa-location-dot text-blue-600"></i>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-1">Локация</h3>
              <p class="text-gray-600">Россия</p>
            </div>
          </div>
        </div>
        <!-- Форма -->
        <form
          class="space-y-6 bg-gray-50 p-8 rounded-2xl"
          action="form.php"
          method="POST"
        >
          <div>
            <label class="block text-gray-700 mb-2 font-medium" for="name"
              >Имя</label
            >
            <input
              type="text"
              id="name"
              name="name"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Ваше имя"
              required
            />
          </div>
          <div>
            <label class="block text-gray-700 mb-2 font-medium" for="email"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label class="block text-gray-700 mb-2 font-medium" for="message"
              >Сообщение</label
            >
            <textarea
              id="message"
              name="message"
              rows="4"
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Расскажите о вашем проекте..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Отправить сообщение
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-12">
        <div>
          <h3 class="text-2xl font-bold gradient-text mb-4">
            <a href="/" class="text-xl font-bold gradient-text">RK-WEB</a>
          </h3>
          <p class="text-gray-400 leading-relaxed">
            Создаю современные веб-решения для успешного бизнеса
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Навигация</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#home"
                class="text-gray-400 hover:text-white transition-colors"
                >Главная</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="text-gray-400 hover:text-white transition-colors"
                >Обо мне</a
              >
            </li>
            <li>
              <a
                href="#projects"
                class="text-gray-400 hover:text-white transition-colors"
                >Проекты</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="text-gray-400 hover:text-white transition-colors"
                >Контакты</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Социальные сети</h4>
          <div class="flex space-x-4">
            <a
              href="https://github.com/RNKuchin"
              target="_blank"
              class="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div
        class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
      >
        <p>© 2024 RK-Web. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>
