export default function Page() {
  return (
    <div className="bfc-page" id="top">
      <header className="bfc-header">
        <div className="bfc-header-inner">
          <a href="#top" className="bfc-logo">
            Beef<span>Casino</span>
          </a>
          <nav className="bfc-nav" aria-label="Основная навигация">
            <a href="#official" className="bfc-nav-link">
              Официальный сайт
            </a>
            <a href="#play" className="bfc-nav-link">
              Играть
            </a>
            <a href="#mirror" className="bfc-nav-link">
              Зеркало
            </a>
            <a href="#bif-online" className="bfc-nav-link">
              С телефона
            </a>
          </nav>
        </div>
      </header>

      <main className="bfc-main">
        <section className="bfc-hero">
          <div className="bfc-hero-inner">
            <h1 className="bfc-h1">
              Beef Casino — <span>официальный сайт</span> для игры онлайн
            </h1>
            <p className="bfc-lead">
              Beef Casino — это современная игровая площадка, где собраны слоты,
              рулетка, блэкджек и живые дилеры. Здесь ценят честные выплаты,
              быстрый вывод и понятный интерфейс. Ниже мы расскажем, как попасть
              на официальный сайт, начать играть и что делать, если доступ
              оказался закрыт.
            </p>
            <a href="#official" className="bfc-cta">
              На официальный сайт
            </a>
            <img
              src="/images/beef-hero.jpg"
              alt="Beef Casino — игровой стол с фишками и картами"
              width={1200}
              height={655}
              className="bfc-hero-img"
              fetchPriority="high"
            />
          </div>
        </section>

        <section id="official" className="bfc-section">
          <div className="bfc-section-inner">
            <div className="bfc-copy-block">
              <h2 className="bfc-h2">
                Beef Casino официальный сайт — вход и регистрация
              </h2>
              <p className="bfc-text">
                Beef Casino официальный сайт открывается в пару кликов и не
                требует сложной настройки. Чтобы начать, достаточно
                зарегистрироваться: укажите почту, придумайте пароль и
                подтвердите аккаунт. Beef Casino официальный ресурс работает
                круглосуточно, поэтому вход доступен в любое время. Новичкам
                площадка дарит приветственный бонус, а постоянным игрокам —
                кешбэк и фриспины.
              </p>
              <ol className="bfc-list">
                <li>Откройте Beef Casino официальный сайт.</li>
                <li>Пройдите регистрацию и подтвердите аккаунт.</li>
                <li>Пополните счёт и выберите любимый слот.</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="play" className="bfc-section bfc-section--alt">
          <div className="bfc-section-inner">
            <div className="bfc-copy-block">
              <h2 className="bfc-h2">
                Beef Casino играть онлайн на реальные деньги
              </h2>
              <p className="bfc-text">
                Beef Casino играть можно как на деньги, так и в демо-режиме. В
                каталоге собраны сотни слотов от проверенных провайдеров,
                рулетка, блэкджек и покер. Beef Casino играть удобно с любого
                устройства — интерфейс подстраивается под экран. Выплаты
                приходят быстро, а служба поддержки отвечает в чате без долгих
                ожиданий.
              </p>
            </div>
          </div>
        </section>

        <section id="mirror" className="bfc-section">
          <div className="bfc-section-inner">
            <div className="bfc-copy-block">
              <h2 className="bfc-h2">
                Beef Casino зеркало — рабочее зеркало на сегодня
              </h2>
              <p className="bfc-text">
                Если основной адрес недоступен, выручает Beef Casino зеркало.
                Это точная копия сайта с тем же балансом, бонусами и историей
                ставок. Beef Casino зеркало обновляется регулярно, поэтому
                актуальную ссылку лучше сохранить заранее. Так вы не потеряете
                доступ к любимым играм даже при технических сбоях.
              </p>
            </div>
            <div className="bfc-media">
              <img
                src="/images/beef-mirror.jpg"
                alt="Beef Casino зеркало — доступ к сайту"
                width={1200}
                height={655}
                loading="lazy"
                className="bfc-img bfc-img--wide"
              />
            </div>
          </div>
        </section>

        <section id="bif-official" className="bfc-section bfc-section--alt">
          <div className="bfc-section-inner">
            <div className="bfc-copy-block">
              <h2 className="bfc-h2">
                Биф Казино официальный сайт и его преимущества
              </h2>
              <p className="bfc-text">
                Биф Казино официальный сайт ценят за честность и прозрачные
                условия. Биф Казино официальный ресурс работает по лицензии, а
                все выплаты проходят проверку. Среди плюсов — быстрый вывод
                средств, удобное пополнение и понятный интерфейс на русском
                языке. Beef казино подходит и новичкам, и опытным игрокам.
              </p>
            </div>
          </div>
        </section>

        <section id="bif-online" className="bfc-section">
          <div className="bfc-section-inner">
            <div className="bfc-copy-block">
              <h2 className="bfc-h2">Биф Казино онлайн — играть с телефона</h2>
              <p className="bfc-text">
                Биф Казино онлайн отлично работает на смартфонах. Биф Казино
                играть можно прямо в браузере, без установки приложений.
                Страницы грузятся быстро, а управление адаптировано под касания.
                Биф Казино онлайн сохраняет весь функционал: слоты, живые дилеры
                и турниры доступны с любого экрана.
              </p>
            </div>
            <div className="bfc-media">
              <img
                src="/images/beef-mobile.jpg"
                alt="Биф Казино онлайн — игра на смартфоне"
                width={720}
                height={1290}
                loading="lazy"
                className="bfc-img bfc-img--portrait"
              />
            </div>
          </div>
        </section>

        <section id="bif-mirror" className="bfc-section bfc-section--alt">
          <div className="bfc-section-inner">
            <div className="bfc-copy-block">
              <h2 className="bfc-h2">
                Биф Казино зеркало рабочее — как зайти без блокировки
              </h2>
              <p className="bfc-text">
                Биф Казино зеркало рабочее помогает обойти ограничения
                провайдера. Достаточно открыть актуальную ссылку и войти под
                своим логином. Биф Казино зеркало полностью повторяет основной
                сайт, поэтому баланс и прогресс сохраняются. Сохраните рабочее
                зеркало в закладки, чтобы всегда оставаться в игре.
              </p>
              <p className="bfc-text">
                Beef Casino объединяет всё, что нужно игроку: надёжный вход,
                быстрые выплаты и рабочие зеркала. Начните с регистрации на
                официальном сайте и играйте в удовольствие — с компьютера или
                телефона.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bfc-footer">
        <div className="bfc-footer-inner">
          <p className="bfc-footer-title">Поиск по сайту</p>
          <div className="bfc-tags">
            <a href="#top" className="bfc-tag">
              #beef casino
            </a>
            <a href="#official" className="bfc-tag">
              #beef casino официальный сайт
            </a>
            <a href="#official" className="bfc-tag">
              #beef casino официальный
            </a>
            <a href="#play" className="bfc-tag">
              #beef casino играть
            </a>
            <a href="#mirror" className="bfc-tag">
              #beef casino зеркало
            </a>
            <a href="#bif-official" className="bfc-tag">
              #биф казино официальный сайт
            </a>
            <a href="#bif-official" className="bfc-tag">
              #биф казино официальный
            </a>
            <a href="#top" className="bfc-tag">
              #beef казино
            </a>
            <a href="#bif-mirror" className="bfc-tag">
              #биф казино зеркало рабочее
            </a>
            <a href="#top" className="bfc-tag">
              #биф казино
            </a>
            <a href="#bif-online" className="bfc-tag">
              #биф казино онлайн
            </a>
            <a href="#bif-online" className="bfc-tag">
              #биф казино играть
            </a>
            <a href="#bif-mirror" className="bfc-tag">
              #биф казино зеркало
            </a>
          </div>
          <p className="bfc-copy">
            © {new Date().getFullYear()} Beef Casino. Играйте ответственно.
          </p>
        </div>
      </footer>
    </div>
  )
}
