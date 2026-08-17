import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  ExternalLink,
  Instagram,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  Star,
  Utensils,
  X,
} from 'lucide-react';

const business = {
  name: 'Muza Baku',
  phone: '+994 50 777 70 20',
  phoneLink: 'tel:+994507777020',
  address: 'Ağ Şəhər, Mərkəzi Bulvar küçəsi 2, Bakı, Azərbaycan',
  hours: 'Hər gün · 10:00–02:00',
  instagram: 'https://www.instagram.com/muza.baku/',
  menu: 'https://muza.clopos.menu/az/1/home',
  maps: 'https://maps.app.goo.gl/RCi6temiYYYkGg619?g_st=ic',
  rating: '4.3',
  reviewCount: '119',
  whatsappReservationEnabled: true,
  whatsappNumber: '994507777020',
};

const images = {
  logo: '/assets/images/image.png',
  heroInterior: '/assets/images/image copy 6.png',
  interior: '/assets/images/image copy 5.png',
  sharedTable: '/assets/images/image copy 7.png',
  sushi: '/assets/images/image copy 8.png',
  people: '/assets/images/image copy 9.png',
  steak: '/assets/images/image copy 2.png',
  dessert: '/assets/images/image copy 3.png',
  drink: '/assets/images/image copy 4.png',
};

const dishes = [
  { name: 'Muza mətbəxindən', image: images.steak, detail: 'Odun istisi, təmiz dadlar' },
  { name: 'Süfrə üçün', image: images.sharedTable, detail: 'Paylaşmaq üçün seçilmişlər' },
  { name: 'Sushi seçimi', image: images.sushi, detail: 'Təravətli və zərif' },
];

const gallery = [
  { image: images.interior, alt: 'Muza Baku interyerində masa və oturacaqlar' },
  { image: images.people, alt: 'Muza Baku-da dostlarla şam anı' },
  { image: '/assets/images/image copy 10.png', alt: 'Muza Baku interyerində kitab rəfi və detallar' },
  { image: '/assets/images/image copy 11.png', alt: 'Muza Baku-da yemək zalı və masalar' },
  { image: '/assets/images/image copy 12.png', alt: 'Muza Baku interyerində dekorativ detal' },
  { image: images.drink, alt: 'Muza Baku-da rəngli içki' },
  { image: images.dessert, alt: 'Muza Baku-da desert təqdimatı' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ image: string; alt: string } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxImage ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxImage]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <a className="brand-mark" href="#top" aria-label="Muza Baku ana səhifə">
          <img src={images.logo} alt="Muza Baku" />
        </a>
        <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`} aria-label="Əsas naviqasiya">
          <button onClick={() => scrollTo('experience')}>Təcrübə</button>
          <a href={business.menu} target="_blank" rel="noreferrer">Menyu</a>
          <button onClick={() => scrollTo('gallery')}>Qalereya</button>
          <button onClick={() => scrollTo('location')}>Məkan</button>
          <button className="nav-reserve" onClick={() => scrollTo('reservation')}>Rezervasiya <ArrowUpRight size={15} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMobileMenuOpen((open) => !open)} aria-label="Menyunu aç" aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={images.heroInterior} alt="Muza Baku interyerində isti və rahat atmosfer" />
          <div className="hero-overlay" />
          <div className="hero-content page-width">
            <p className="eyebrow light"><span /> Ağ Şəhər · Bakı</p>
            <h1 id="hero-title">Ağ Şəhərin<br /><em>öz masası.</em></h1>
            <p className="hero-copy">Səhər qəhvəsindən gecə içkilərinə qədər günün hər anı üçün Muza.</p>
            <div className="hero-actions">
              <button className="button button-brass" onClick={() => scrollTo('reservation')}>Masa rezervasiya et <ArrowUpRight size={17} /></button>
              <a className="text-link light-link" href={business.menu} target="_blank" rel="noreferrer">Menyuya bax <ArrowDownRight size={17} /></a>
            </div>
          </div>
          <div className="hero-bottom page-width">
            <span>Muza Baku</span>
            <span className="scroll-note"><span className="scroll-line" /> Aşağı sürüşdürün</span>
          </div>
        </section>

        <section className="quick-info page-width" aria-label="Muza haqqında qısa məlumat">
          <div><span className="info-label">Mətbəx</span><strong>Səhər yeməyi · Nahar · Şam · İçkilər</strong></div>
          <div><span className="info-label">Ünvan</span><strong>Ağ Şəhər · Mərkəzi Bulvar küçəsi 2</strong></div>
          <div><span className="info-label">İş saatları</span><strong>{business.hours}</strong></div>
        </section>

        <section className="section page-width experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow"><span /> Menyudan seçilmişlər</p>
              <h2 id="experience-title">Muza-nın<br /><em>dadı.</em></h2>
            </div>
            <p className="section-intro">Süfrədə paylaşmaq, günə yaxşı başlamaq və axşamı bir az da uzatmaq üçün.</p>
          </div>
          <div className="dish-grid">
            {dishes.map((dish, index) => (
              <article className={`dish-item dish-${index + 1}`} key={dish.name}>
                <div className="image-frame"><img src={dish.image} alt={dish.name} loading="lazy" /></div>
                <div className="dish-caption"><div><h3>{dish.name}</h3><p>{dish.detail}</p></div><span className="index">0{index + 1}</span></div>
              </article>
            ))}
          </div>
          <div className="section-action"><a className="outline-link" href={business.menu} target="_blank" rel="noreferrer">Tam menyuya bax <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="gallery-section" id="gallery" aria-labelledby="gallery-title">
          <div className="page-width">
            <div className="section-heading split-heading gallery-heading">
              <div><p className="eyebrow"><span /> Atmosfer</p><h2 id="gallery-title">Bir az da<br /><em>yaxından.</em></h2></div>
              <div className="gallery-side"><p className="section-intro">Məkanın işığı, süfrənin səsi, axşamın ritmi. Muza-nı öz gözlərinizlə kəşf edin.</p><a className="gallery-social" href={business.instagram} target="_blank" rel="noreferrer"><Instagram size={15} /> @muza.baku <ArrowUpRight size={13} /></a></div>
            </div>
            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <button className={`gallery-item gallery-item-${index + 1}`} key={item.image} onClick={() => setLightboxImage(item)} aria-label={`${item.alt} — böyüt`}>
                  <img src={item.image} alt={item.alt} loading="lazy" /><span className="gallery-expand"><Plus size={18} /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="reviews-section page-width" aria-labelledby="reviews-title">
          <div className="review-copy"><p className="eyebrow"><span /> Qonaqların seçimi</p><h2 id="reviews-title">Süfrə<br /><em>danışır.</em></h2><p className="review-lede">Muza-da keçirilən hər an bizim üçün dəyərlidir. Siz də öz masanızı seçin.</p><a className="text-link" href={business.maps} target="_blank" rel="noreferrer">Google rəylərinə bax <ExternalLink size={15} /></a></div>
          <div className="review-score"><div className="review-meta"><span className="score-number">{business.rating}</span><span className="score-divider">/ 5</span><div className="stars" aria-label="5 üzərindən 4.3 ulduz">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={15} fill={star < 5 ? 'currentColor' : 'none'} />)}</div></div><span className="review-count">{business.reviewCount} Google rəyi</span></div>
        </section>

        <section className="location-section page-width" id="location" aria-labelledby="location-title">
          <div className="location-copy"><p className="eyebrow"><span /> Sizi gözləyirik</p><h2 id="location-title">Gəlin,<br /><em>yerinizi seçin.</em></h2><div className="location-details"><div className="detail-row"><MapPin size={18} /><span>{business.address}</span></div><div className="detail-row"><Clock3 size={18} /><span>{business.hours}</span></div><div className="detail-row"><Phone size={18} /><a href={business.phoneLink}>{business.phone}</a></div></div><div className="location-actions"><a className="button button-brass" href={business.maps} target="_blank" rel="noreferrer">Xəritədə aç <ArrowUpRight size={16} /></a><a className="outline-link" href={business.phoneLink}>Zəng et</a></div></div>
          <div className="map-card"><div className="map-pattern" /><div className="map-pin"><MapPin size={26} /></div><div className="map-label"><span>Muza Baku</span><small>Ağ Şəhər, Bakı</small></div><a href={business.maps} target="_blank" rel="noreferrer" className="map-open">Google Maps-də aç <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="reservation-section page-width" id="reservation" aria-labelledby="reservation-title">
          <div className="reservation-intro"><p className="eyebrow light"><span /> Masanız hazırdır</p><h2 id="reservation-title">Bu axşam<br /><em>Muza-da.</em></h2><p>Gəlişiniz üçün masa istəyinizi bizə göndərin. Son təsdiq restoran tərəfindən WhatsApp və ya telefonla edilir.</p></div>
          <ReservationForm />
        </section>

        <section className="final-cta page-width" aria-labelledby="cta-title"><div><p className="eyebrow"><span /> Növbəti görüşünüz</p><h2 id="cta-title">Masanız<br /><em>sizi gözləyir.</em></h2></div><div className="final-actions"><button className="button button-brass" onClick={() => scrollTo('reservation')}>Rezervasiya et <ArrowUpRight size={17} /></button><a className="outline-link" href={business.phoneLink}>Zəng et</a></div></section>
      </main>

      <footer className="footer page-width"><div className="footer-main"><div className="footer-brand"><img src={images.logo} alt="Muza Baku" className="footer-logo" /><p>Ağ Şəhərin günə başlayan,<br />axşama uzanan masası.</p></div><div className="footer-column"><span className="footer-label">Kəşf et</span><button onClick={() => scrollTo('experience')}>Təcrübə</button><a href={business.menu} target="_blank" rel="noreferrer">Menyu</a><button onClick={() => scrollTo('gallery')}>Qalereya</button></div><div className="footer-column"><span className="footer-label">Əlaqə</span><button onClick={() => scrollTo('reservation')}>Rezervasiya</button><a href={business.phoneLink}>Zəng et</a><a href={business.maps} target="_blank" rel="noreferrer">Xəritədə aç</a></div><a className="instagram-link" href={business.instagram} target="_blank" rel="noreferrer"><Instagram size={17} /> @muza.baku <ArrowUpRight size={14} /></a></div><div className="footer-bottom"><span>© 2026 Muza Baku</span><span>{business.address.replace(', Azərbaycan', '')}</span><span>{business.hours}</span></div></footer>

      <div className="mobile-action-bar"><button onClick={() => scrollTo('reservation')}><CalendarDays size={17} /> Rezervasiya</button><a href={business.phoneLink}><Phone size={17} /> Zəng et</a><a href={business.menu} target="_blank" rel="noreferrer"><Utensils size={17} /> Menyu</a></div>

      {lightboxImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Şəkil görüntüləyicisi" onClick={() => setLightboxImage(null)}><button className="lightbox-close" onClick={() => setLightboxImage(null)} aria-label="Şəkli bağla"><X size={24} /></button><img src={lightboxImage.image} alt={lightboxImage.alt} onClick={(event) => event.stopPropagation()} /></div>}
    </div>
  );
}

function ReservationForm() {
  const [guests, setGuests] = useState(2);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [opened, setOpened] = useState(false);
  const [fallbackUrl, setFallbackUrl] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const date = String(form.get('date') ?? '');
    const time = String(form.get('time') ?? '');
    const note = String(form.get('note') ?? '').trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = 'Adınızı qeyd edin';
    if (!date) nextErrors.date = 'Tarixi seçin';
    if (!time) nextErrors.time = 'Saatı seçin';
    if (!guests) nextErrors.guests = 'Qonaq sayını seçin';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = ['🍽️ *Muza Baku — Masa rezervasiyası*', '', 'Salam! Muza Baku-da masa rezervasiya etmək istəyirəm.', '', `👤 Ad: ${name}`, `📅 Tarix: ${date}`, `🕘 Saat: ${time}`, `👥 Qonaq sayı: ${guests}`, note ? `📝 Qeyd: ${note}` : '', '', 'Zəhmət olmasa rezervasiyanı təsdiqləyin.'].filter(Boolean).join('\n');
    const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
    setFallbackUrl(url);
    setOpened(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return <form className="reservation-form" onSubmit={handleSubmit} noValidate><div className="form-grid"><label className="field field-wide">Ad<span>*</span><input name="name" type="text" placeholder="Adınızı yazın" autoComplete="name" aria-invalid={Boolean(errors.name)} />{errors.name && <small>{errors.name}</small>}</label><label className="field">Tarix<span>*</span><input name="date" type="date" min={new Date().toISOString().split('T')[0]} aria-invalid={Boolean(errors.date)} />{errors.date && <small>{errors.date}</small>}</label><label className="field">Saat<span>*</span><input name="time" type="time" aria-invalid={Boolean(errors.time)} />{errors.time && <small>{errors.time}</small>}</label><div className="field guest-field">Qonaq sayı<span>*</span><div className="guest-selector"><button type="button" onClick={() => setGuests((value) => Math.max(1, value - 1))} aria-label="Qonaq sayını azalt"><Minus size={16} /></button><strong>{guests}</strong><button type="button" onClick={() => setGuests((value) => Math.min(20, value + 1))} aria-label="Qonaq sayını artır"><Plus size={16} /></button></div>{errors.guests && <small>{errors.guests}</small>}</div><label className="field field-wide">Qeyd <span className="optional">(istəyə görə)</span><textarea name="note" placeholder="Xüsusi bir istəyiniz varsa, yazın" rows={3} /></label></div><button className="button button-brass submit-button" type="submit">Rezervasiya et <ArrowUpRight size={17} /></button><p className="form-note">Rezervasiya sorğunuz göndərildikdən sonra son təsdiq restoran tərəfindən edilir.</p>{opened && <div className="form-fallback" role="status"><span>WhatsApp açılır…</span><a href={fallbackUrl} target="_blank" rel="noreferrer">WhatsApp-da aç <ArrowUpRight size={14} /></a></div>}</form>;
}

export default App;
