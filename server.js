<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
<title>Yahweh Cleaning Service</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  :root{
    --teal-950:#0B1F1A;
    --teal-900:#0F6B5C;
    --teal-700:#158A76;
    --teal-100:#DCEFEA;
    --sand-500:#E8A33D;
    --sand-300:#F3C878;
    --sand-100:#FBF0DC;
    --bg:#F7F5EF;
    --card:#FFFFFF;
    --ink:#16241F;
    --ink-soft:#5C6D66;
    --line:#E7E2D6;
    --success:#3FA796;
    --danger:#C15B4A;
    --radius:18px;
    --shadow: 0 8px 24px rgba(15,44,37,0.08);
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{
    font-family:'Inter',sans-serif;
    background:var(--teal-950);
    color:var(--ink);
    -webkit-font-smoothing:antialiased;
    display:flex;
    justify-content:center;
    min-height:100vh;
  }
  .phone{
    width:100%;
    max-width:460px;
    min-height:100vh;
    background:var(--bg);
    position:relative;
    overflow-x:hidden;
    display:flex;
    flex-direction:column;
  }
  ::-webkit-scrollbar{display:none;}

  /* ---------- Top bar ---------- */
  .topbar{
    padding:18px 20px 14px;
    background:linear-gradient(160deg,var(--teal-900) 0%, var(--teal-950) 100%);
    color:#fff;
    position:relative;
    z-index:2;
  }
  .topbar .row{display:flex;align-items:center;justify-content:space-between;gap:10px;}
  .brandmark{display:flex;align-items:center;gap:10px;}
  .brandmark .logo{
    width:38px;height:38px;border-radius:11px;
    background:var(--sand-500);
    display:flex;align-items:center;justify-content:center;
    font-family:'Fraunces',serif;font-weight:700;font-size:19px;color:var(--teal-950);
    flex-shrink:0;
  }
  .brand-text{line-height:1.15;}
  .brand-text .name{font-family:'Fraunces',serif;font-weight:600;font-size:16.5px;}
  .brand-text .tag{font-size:11px;color:var(--teal-100);opacity:.85;letter-spacing:.02em;}
  .icon-btn{
    width:36px;height:36px;border-radius:50%;
    background:rgba(255,255,255,0.12);
    border:none;color:#fff;display:flex;align-items:center;justify-content:center;
    cursor:pointer;flex-shrink:0;
  }
  .location-pill{
    margin-top:16px;
    background:rgba(255,255,255,0.1);
    border:1px solid rgba(255,255,255,0.18);
    border-radius:14px;
    padding:10px 14px;
    display:flex;align-items:center;gap:10px;
    cursor:pointer;
  }
  .location-pill svg{flex-shrink:0;}
  .location-pill .lbl{font-size:10.5px;color:var(--sand-300);text-transform:uppercase;letter-spacing:.06em;font-weight:600;}
  .location-pill .val{font-size:13.5px;font-weight:600;color:#fff;}

  /* signature wave divider */
  .wave{display:block;margin-top:-1px;position:relative;z-index:1;}

  /* ---------- Screens ---------- */
  .screen{display:none;flex-direction:column;flex:1;padding-bottom:92px;animation:fade .25s ease;}
  .screen.active{display:flex;}
  @keyframes fade{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}

  .section-pad{padding:18px 20px;}
  h1,h2,h3{font-family:'Fraunces',serif;margin:0;color:var(--teal-950);}
  .eyebrow{
    font-size:11px;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--teal-700);
  }
  p{margin:0;}

  /* promo banner */
  .promo{
    margin:16px 20px 4px;
    background:linear-gradient(120deg,var(--sand-500),var(--sand-300));
    border-radius:var(--radius);
    padding:16px 18px;
    display:flex;align-items:center;justify-content:space-between;
    color:var(--teal-950);
    box-shadow:var(--shadow);
  }
  .promo .headline{font-family:'Fraunces',serif;font-weight:600;font-size:16px;max-width:200px;line-height:1.25;}
  .promo .sub{font-size:12px;margin-top:4px;color:#3d2c0f;opacity:.85;}
  .promo .icon{font-size:34px;}

  /* service grid */
  .services-title{padding:22px 20px 10px;display:flex;align-items:baseline;justify-content:space-between;}
  .grid-services{
    display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:0 20px 6px;
  }
  .service-card{
    background:var(--card);border-radius:16px;padding:14px 8px 12px;
    display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;
    box-shadow:var(--shadow);cursor:pointer;border:1px solid transparent;
    transition:transform .15s ease, border-color .15s ease;
  }
  .service-card:active{transform:scale(.96);}
  .service-card .emoji-badge{
    width:46px;height:46px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:22px;
  }
  .badge-car{background:var(--teal-100);}
  .badge-house{background:var(--sand-100);}
  .badge-garden{background:#E4F2DC;}
  .service-card .label{font-size:12px;font-weight:700;color:var(--teal-950);line-height:1.2;}
  .service-card .from{font-size:10.5px;color:var(--ink-soft);}

  /* active order strip */
  .active-order{
    margin:8px 20px 4px;background:var(--teal-950);color:#fff;border-radius:16px;
    padding:14px 16px;display:flex;align-items:center;gap:12px;cursor:pointer;
    box-shadow:var(--shadow);
  }
  .active-order .pulse{
    width:10px;height:10px;border-radius:50%;background:var(--sand-500);flex-shrink:0;
    box-shadow:0 0 0 rgba(232,163,61,.6);animation:pulse 1.6s infinite;
  }
  @keyframes pulse{
    0%{box-shadow:0 0 0 0 rgba(232,163,61,.55);}
    70%{box-shadow:0 0 0 8px rgba(232,163,61,0);}
    100%{box-shadow:0 0 0 0 rgba(232,163,61,0);}
  }
  .active-order .txt{flex:1;}
  .active-order .txt .t1{font-size:12.5px;font-weight:700;}
  .active-order .txt .t2{font-size:11px;color:var(--teal-100);}

  /* section header with back */
  .header-bar{
    display:flex;align-items:center;gap:12px;padding:16px 20px 6px;background:var(--bg);
  }
  .header-bar h2{font-size:19px;}
  .back-btn{
    width:34px;height:34px;border-radius:50%;border:1px solid var(--line);background:#fff;
    display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;
  }

  /* package cards */
  .pkg-list{padding:6px 20px 10px;display:flex;flex-direction:column;gap:12px;}
  .pkg-card{
    background:var(--card);border:1.5px solid var(--line);border-radius:16px;padding:14px 14px;
    display:flex;justify-content:space-between;align-items:flex-start;gap:10px;cursor:pointer;
  }
  .pkg-card.selected{border-color:var(--teal-900);background:var(--teal-100);}
  .pkg-card .info .name{font-weight:700;font-size:14.5px;color:var(--teal-950);}
  .pkg-card .info .desc{font-size:12px;color:var(--ink-soft);margin-top:4px;line-height:1.4;}
  .pkg-card .price{font-family:'IBM Plex Mono',monospace;font-weight:600;font-size:14px;color:var(--teal-900);white-space:nowrap;}

  /* form elements */
  .field{padding:0 20px;margin-bottom:14px;}
  .field label{display:block;font-size:11.5px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:var(--ink-soft);margin-bottom:6px;}
  .field input, .field textarea, .field select{
    width:100%;border:1.5px solid var(--line);background:#fff;border-radius:12px;padding:12px 13px;
    font-family:'Inter',sans-serif;font-size:14px;color:var(--ink);
  }
  .field input:focus, .field textarea:focus, .field select:focus{outline:none;border-color:var(--teal-900);}
  .field textarea{resize:none;min-height:70px;}
  .two-col{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:0 20px;margin-bottom:14px;}
  .two-col .field{padding:0;margin-bottom:0;}

  /* sticky action bar */
  .sticky-bar{
    position:fixed;bottom:0;left:0;right:0;max-width:460px;margin:0 auto;
    background:#fff;border-top:1px solid var(--line);
    padding:12px 20px calc(12px + env(safe-area-inset-bottom));
    display:flex;align-items:center;justify-content:space-between;gap:14px;z-index:20;
  }
  .sticky-bar .price-box .lbl{font-size:10.5px;color:var(--ink-soft);text-transform:uppercase;letter-spacing:.05em;}
  .sticky-bar .price-box .amt{font-family:'IBM Plex Mono',monospace;font-weight:700;font-size:17px;color:var(--teal-950);}
  .btn-primary{
    background:var(--teal-900);color:#fff;border:none;border-radius:13px;padding:13px 22px;
    font-weight:700;font-size:14px;cursor:pointer;font-family:'Inter',sans-serif;
    box-shadow:0 6px 16px rgba(15,107,92,0.3);
  }
  .btn-primary:disabled{background:#B7C2BE;box-shadow:none;cursor:not-allowed;}
  .btn-full{width:100%;text-align:center;display:block;}

  /* confirmation / tracking */
  .track-hero{
    padding:26px 20px 20px;text-align:center;background:linear-gradient(160deg,var(--teal-900),var(--teal-950));color:#fff;
  }
  .check-circle{
    width:64px;height:64px;border-radius:50%;background:var(--sand-500);margin:0 auto 14px;
    display:flex;align-items:center;justify-content:center;color:var(--teal-950);
  }
  .track-hero h2{color:#fff;font-size:20px;}
  .track-hero .sub{font-size:12.5px;color:var(--teal-100);margin-top:6px;}
  .order-code{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--sand-300);margin-top:10px;}

  .timeline{padding:22px 20px 6px;}
  .tl-item{display:flex;gap:14px;position:relative;padding-bottom:26px;}
  .tl-item:last-child{padding-bottom:0;}
  .tl-item .dot-wrap{display:flex;flex-direction:column;align-items:center;}
  .tl-item .dot{
    width:26px;height:26px;border-radius:50%;background:#fff;border:2px solid var(--line);
    display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;z-index:1;
  }
  .tl-item.done .dot{background:var(--teal-900);border-color:var(--teal-900);color:#fff;}
  .tl-item.current .dot{background:var(--sand-500);border-color:var(--sand-500);color:var(--teal-950);}
  .tl-item .bar{width:2px;flex:1;background:var(--line);margin-top:2px;}
  .tl-item.done .bar{background:var(--teal-900);}
  .tl-item .body{padding-top:2px;}
  .tl-item .title{font-weight:700;font-size:13.5px;color:var(--teal-950);}
  .tl-item .time{font-size:11px;color:var(--ink-soft);margin-top:2px;}
  .tl-item.pending .title, .tl-item.pending .time{color:#A9B3AE;}

  .provider-card{
    margin:10px 20px 0;background:var(--card);border-radius:16px;padding:14px;
    display:flex;align-items:center;gap:12px;box-shadow:var(--shadow);
  }
  .avatar{
    width:46px;height:46px;border-radius:50%;background:var(--teal-100);color:var(--teal-900);
    display:flex;align-items:center;justify-content:center;font-weight:700;font-family:'Fraunces',serif;flex-shrink:0;
  }
  .provider-card .p-name{font-weight:700;font-size:13.5px;color:var(--teal-950);}
  .provider-card .p-meta{font-size:11.5px;color:var(--ink-soft);margin-top:2px;}
  .call-btn{
    margin-left:auto;width:38px;height:38px;border-radius:50%;background:var(--teal-100);color:var(--teal-900);
    border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;
  }

  /* orders list */
  .order-row{
    margin:0 20px 12px;background:var(--card);border-radius:16px;padding:14px;box-shadow:var(--shadow);
    display:flex;justify-content:space-between;align-items:center;gap:10px;cursor:pointer;
  }
  .order-row .o-name{font-weight:700;font-size:13.5px;color:var(--teal-950);}
  .order-row .o-meta{font-size:11.5px;color:var(--ink-soft);margin-top:3px;}
  .status-chip{
    font-size:10.5px;font-weight:700;padding:5px 10px;border-radius:20px;white-space:nowrap;text-transform:uppercase;letter-spacing:.03em;
  }
  .chip-progress{background:var(--sand-100);color:#8A5A0F;}
  .chip-done{background:#E1F3EE;color:var(--success);}
  .empty-state{
    padding:60px 30px;text-align:center;color:var(--ink-soft);
  }
  .empty-state .em{font-size:38px;margin-bottom:10px;}

  /* profile */
  .profile-hero{
    padding:26px 20px 22px;background:linear-gradient(160deg,var(--teal-900),var(--teal-950));color:#fff;
    display:flex;align-items:center;gap:14px;
  }
  .profile-hero .avatar-big{
    width:58px;height:58px;border-radius:50%;background:var(--sand-500);color:var(--teal-950);
    display:flex;align-items:center;justify-content:center;font-family:'Fraunces',serif;font-weight:700;font-size:22px;
  }
  .profile-hero .p-name{font-weight:700;font-size:16px;}
  .profile-hero .p-phone{font-size:12px;color:var(--teal-100);margin-top:2px;}
  .list-menu{padding:16px 20px;display:flex;flex-direction:column;gap:10px;}
  .menu-row{
    background:var(--card);border-radius:14px;padding:14px 15px;display:flex;align-items:center;gap:12px;
    box-shadow:var(--shadow);
  }
  .menu-row .mi{width:34px;height:34px;border-radius:10px;background:var(--teal-100);color:var(--teal-900);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
  .menu-row .mt{font-size:13.5px;font-weight:600;color:var(--teal-950);}
  .menu-row .ms{font-size:11px;color:var(--ink-soft);}

  /* bottom nav */
  .bottom-nav{
    position:fixed;bottom:0;left:0;right:0;max-width:460px;margin:0 auto;
    background:#fff;border-top:1px solid var(--line);display:flex;z-index:30;
    padding-bottom:env(safe-area-inset-bottom);
  }
  .nav-btn{
    flex:1;border:none;background:none;padding:11px 0 9px;display:flex;flex-direction:column;align-items:center;gap:4px;
    color:var(--ink-soft);cursor:pointer;font-family:'Inter',sans-serif;
  }
  .nav-btn.active{color:var(--teal-900);}
  .nav-btn span{font-size:10.5px;font-weight:600;}

  .toast{
    position:fixed;bottom:96px;left:50%;transform:translateX(-50%);background:var(--teal-950);color:#fff;
    padding:11px 20px;border-radius:30px;font-size:13px;font-weight:600;z-index:50;opacity:0;pointer-events:none;
    transition:opacity .25s ease, transform .25s ease;box-shadow:var(--shadow);white-space:nowrap;
  }
  .toast.show{opacity:1;transform:translateX(-50%) translateY(-6px);}

  .footer-note{padding:8px 20px 20px;text-align:center;font-size:10.5px;color:var(--ink-soft);}
</style>
</head>
<body>
<div class="phone" id="phone">

  <!-- ============ HOME ============ -->
  <div class="screen active" id="screen-home">
    <div class="topbar">
      <div class="row">
        <div class="brandmark">
          <div class="logo">Y</div>
          <div class="brand-text">
            <div class="name">Yahweh Cleaning Service</div>
            <div class="tag">Car &middot; Home &middot; Garden</div>
          </div>
        </div>
        <button class="icon-btn" onclick="showToast('No new notifications')">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
        </button>
      </div>
      <div class="location-pill" onclick="showToast('Address editing coming soon')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E8A33D" stroke-width="2"><path d="M12 22s8-7.58 8-13a8 8 0 10-16 0c0 5.42 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg>
        <div>
          <div class="lbl">Service address</div>
          <div class="val" id="home-address">Swakopmund, Namibia</div>
        </div>
      </div>
    </div>

    <div id="active-order-slot"></div>

    <div class="promo">
      <div>
        <div class="headline">First booking? Get N$50 off</div>
        <div class="sub">Applied automatically at checkout</div>
      </div>
      <div class="icon">🧽</div>
    </div>

    <div class="services-title">
      <h2>Our services</h2>
      <span class="eyebrow" style="cursor:pointer" onclick="switchTab('orders')">My orders</span>
    </div>
    <div class="grid-services">
      <div class="service-card" onclick="openCategory('car')">
        <div class="emoji-badge badge-car">🚗</div>
        <div class="label">Car Wash</div>
        <div class="from">From N$120</div>
      </div>
      <div class="service-card" onclick="openCategory('house')">
        <div class="emoji-badge badge-house">🧹</div>
        <div class="label">House Cleaning</div>
        <div class="from">From N$300</div>
      </div>
      <div class="service-card" onclick="openCategory('garden')">
        <div class="emoji-badge badge-garden">🌿</div>
        <div class="label">Garden Service</div>
        <div class="from">From N$150</div>
      </div>
    </div>

    <div class="services-title" style="padding-top:10px;">
      <h2 style="font-size:16px;">Why book with us</h2>
    </div>
    <div class="list-menu" style="padding-top:0;">
      <div class="menu-row">
        <div class="mi">✓</div>
        <div><div class="mt">Vetted local providers</div><div class="ms">Trusted teams around Swakopmund &amp; Rehoboth</div></div>
      </div>
      <div class="menu-row">
        <div class="mi">💳</div>
        <div><div class="mt">Pay how you like</div><div class="ms">Cash, EFT or mobile money on completion</div></div>
      </div>
      <div class="menu-row">
        <div class="mi">📍</div>
        <div><div class="mt">Live order tracking</div><div class="ms">Know exactly when your team arrives</div></div>
      </div>
    </div>
    <div class="footer-note">Yahweh Cleaning Service &middot; Serving Swakopmund and surrounding areas</div>
  </div>

  <!-- ============ CATEGORY / PACKAGE SELECT ============ -->
  <div class="screen" id="screen-category">
    <div class="header-bar">
      <button class="back-btn" onclick="switchTab('home')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16241F" stroke-width="2.2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <h2 id="category-title">Service</h2>
    </div>
    <div class="section-pad" style="padding-top:0;padding-bottom:6px;">
      <p style="font-size:13px;color:var(--ink-soft);" id="category-sub">Choose the package that fits your needs.</p>
    </div>
    <div class="pkg-list" id="pkg-list"></div>
  </div>

  <!-- ============ BOOKING FORM ============ -->
  <div class="screen" id="screen-booking">
    <div class="header-bar">
      <button class="back-btn" onclick="goBackToCategory()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16241F" stroke-width="2.2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <h2>Booking details</h2>
    </div>

    <div class="field" style="margin-top:6px;">
      <label>Service address</label>
      <input type="text" id="b-address" placeholder="e.g. 12 Palm Street, Swakopmund" value="Swakopmund, Namibia">
    </div>
    <div class="two-col">
      <div class="field">
        <label>Date</label>
        <input type="date" id="b-date">
      </div>
      <div class="field">
        <label>Time</label>
        <input type="time" id="b-time" value="10:00">
      </div>
    </div>
    <div class="field">
      <label>Contact number</label>
      <input type="tel" id="b-phone" placeholder="081 234 5678">
    </div>
    <div class="field">
      <label>Notes for the team (optional)</label>
      <textarea id="b-notes" placeholder="Gate code, pets, specific areas to focus on..."></textarea>
    </div>

    <div class="section-pad" style="padding-top:2px;">
      <div class="pkg-card" style="cursor:default;">
        <div class="info">
          <div class="name" id="b-pkg-name">Package</div>
          <div class="desc" id="b-pkg-desc">Description</div>
        </div>
        <div class="price" id="b-pkg-price">N$0</div>
      </div>
    </div>

    <div class="section-pad" style="padding-top:0;padding-bottom:110px;">
      <p style="font-size:11.5px;color:var(--ink-soft);text-align:center;">Tapping confirm opens WhatsApp with your order details — just hit send so our team gets notified instantly.</p>
    </div>

    <div class="sticky-bar">
      <div class="price-box">
        <div class="lbl">Total</div>
        <div class="amt" id="b-total">N$0</div>
      </div>
      <button class="btn-primary" onclick="confirmBooking()">Confirm &amp; notify</button>
    </div>
  </div>

  <!-- ============ TRACKING ============ -->
  <div class="screen" id="screen-tracking">
    <div class="track-hero">
      <div class="check-circle">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0B1F1A" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>
      </div>
      <h2 id="track-title">Booking confirmed</h2>
      <div class="sub" id="track-sub">A provider will be assigned shortly</div>
      <div class="order-code" id="track-code">Order #0000</div>
    </div>
    <div class="provider-card" id="provider-card" style="display:none;">
      <div class="avatar" id="provider-avatar">?</div>
      <div>
        <div class="p-name" id="provider-name">—</div>
        <div class="p-meta" id="provider-meta">—</div>
      </div>
      <button class="call-btn" onclick="showToast('Calling provider...')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
      </button>
    </div>
    <div class="timeline" id="timeline"></div>
    <div class="section-pad">
      <button class="btn-primary btn-full" onclick="switchTab('home')">Back to home</button>
    </div>
  </div>

  <!-- ============ ORDERS ============ -->
  <div class="screen" id="screen-orders">
    <div class="header-bar" style="padding-top:20px;">
      <h2>My orders</h2>
    </div>
    <div id="orders-list" style="padding-top:8px;"></div>
  </div>

  <!-- ============ PROFILE ============ -->
  <div class="screen" id="screen-profile">
    <div class="profile-hero">
      <div class="avatar-big" id="profile-initial">Y</div>
      <div>
        <div class="p-name" id="profile-name-display">Guest customer</div>
        <div class="p-phone" id="profile-phone-display">Add your details below</div>
      </div>
    </div>
    <div class="field" style="margin-top:18px;">
      <label>Full name</label>
      <input type="text" id="p-name" placeholder="Your name">
    </div>
    <div class="field">
      <label>Phone number</label>
      <input type="tel" id="p-phone" placeholder="081 234 5678">
    </div>
    <div class="field">
      <label>Home address</label>
      <input type="text" id="p-address" placeholder="Swakopmund, Namibia">
    </div>
    <div class="section-pad" style="padding-top:0;">
      <button class="btn-primary btn-full" onclick="saveProfile()">Save details</button>
    </div>
    <div class="list-menu" style="padding-top:0;">
      <div class="menu-row">
        <div class="mi">📞</div>
        <div><div class="mt">Contact support</div><div class="ms">WhatsApp us for help with an order</div></div>
      </div>
      <div class="menu-row">
        <div class="mi">ℹ️</div>
        <div><div class="mt">About Yahweh Cleaning Service</div><div class="ms">Car wash, house cleaning &amp; garden care</div></div>
      </div>
    </div>
  </div>

  <!-- ============ BOTTOM NAV ============ -->
  <div class="bottom-nav" id="bottom-nav">
    <button class="nav-btn active" data-tab="home" onclick="switchTab('home')">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      <span>Home</span>
    </button>
    <button class="nav-btn" data-tab="orders" onclick="switchTab('orders')">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
      <span>Orders</span>
    </button>
    <button class="nav-btn" data-tab="profile" onclick="switchTab('profile')">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>
      <span>Profile</span>
    </button>
  </div>

  <div class="toast" id="toast"></div>
</div>

<script>
/* ---------------- DATA ---------------- */
const CATALOG = {
  car: {
    title: 'Car Wash',
    sub: 'Exterior, interior or the full valet — at your address.',
    packages: [
      {id:'car-ext', name:'Exterior Wash', desc:'Foam wash, rinse, tyre shine and exterior dry.', price:120},
      {id:'car-int', name:'Interior Valet', desc:'Vacuum, dashboard wipe-down, seat & window clean.', price:150},
      {id:'car-full', name:'Full Valet', desc:'Complete interior and exterior detail package.', price:250},
    ]
  },
  house: {
    title: 'House Cleaning',
    sub: 'Standard upkeep or a full deep clean, done right.',
    packages: [
      {id:'house-std', name:'Standard Clean', desc:'Dusting, sweeping, mopping, kitchen & bathroom wipe-down.', price:300},
      {id:'house-deep', name:'Deep Clean', desc:'Full deep clean including windows, appliances and skirtings.', price:550},
      {id:'house-move', name:'Move-in / Move-out Clean', desc:'Top-to-bottom clean for an empty property.', price:700},
    ]
  },
  garden: {
    title: 'Garden Service',
    sub: 'Exterior grounds or interior plant care.',
    packages: [
      {id:'garden-ext', name:'Exterior Garden', desc:'Lawn mowing, hedge trimming and leaf clearing.', price:200},
      {id:'garden-int', name:'Interior Garden Care', desc:'Indoor potted plant care, repotting and watering setup.', price:150},
      {id:'garden-full', name:'Full Garden Package', desc:'Combined exterior and interior garden care.', price:350},
    ]
  }
};

const TRACK_STEPS = [
  {key:'confirmed', title:'Booking confirmed', delay:0},
  {key:'assigned', title:'Provider assigned', delay:3000},
  {key:'enroute', title:'Provider en route', delay:7000},
  {key:'progress', title:'Service in progress', delay:12000},
  {key:'done', title:'Service completed', delay:18000},
];

const PROVIDER_NAMES = ['Johannes K.', 'Maria N.', 'Petrus S.', 'Angela D.', 'Frederik B.'];
const OWNER_WHATSAPP = '264818455353'; // Yahweh Cleaning Service order line (no + or leading 0)

/* ---------------- STATE (in-memory only, resets on reload) ---------------- */
let state = {
  orders: [],
  orderCounter: 1000,
  profile: {name:'', phone:'', address:''},
  draft: {category:null, pkg:null},
  activeOrderId: null,
};

/* ---------------- NAV ---------------- */
function switchTab(tab){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('bottom-nav').style.display = 'flex';
  if(tab==='home'){ document.getElementById('screen-home').classList.add('active'); renderActiveOrderSlot(); }
  if(tab==='orders'){ document.getElementById('screen-orders').classList.add('active'); renderOrders(); }
  if(tab==='profile'){ document.getElementById('screen-profile').classList.add('active'); renderProfile(); }
  document.querySelectorAll('.nav-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.tab===tab);
  });
}

function openCategory(catKey){
  state.draft.category = catKey;
  const cat = CATALOG[catKey];
  document.getElementById('category-title').textContent = cat.title;
  document.getElementById('category-sub').textContent = cat.sub;
  const list = document.getElementById('pkg-list');
  list.innerHTML = '';
  cat.packages.forEach(pkg=>{
    const div = document.createElement('div');
    div.className = 'pkg-card';
    div.innerHTML = `
      <div class="info">
        <div class="name">${pkg.name}</div>
        <div class="desc">${pkg.desc}</div>
      </div>
      <div class="price">N$${pkg.price}</div>
    `;
    div.onclick = ()=> selectPackage(catKey, pkg.id);
    list.appendChild(div);
  });
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('bottom-nav').style.display = 'none';
  document.getElementById('screen-category').classList.add('active');
}

function selectPackage(catKey, pkgId){
  const pkg = CATALOG[catKey].packages.find(p=>p.id===pkgId);
  state.draft.pkg = pkg;
  document.getElementById('b-pkg-name').textContent = pkg.name;
  document.getElementById('b-pkg-desc').textContent = pkg.desc;
  document.getElementById('b-pkg-price').textContent = 'N$'+pkg.price;
  document.getElementById('b-total').textContent = 'N$'+pkg.price;
  document.getElementById('b-address').value = state.profile.address || 'Swakopmund, Namibia';
  document.getElementById('b-phone').value = state.profile.phone || '';
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('b-date').value = today;
  document.getElementById('b-date').min = today;
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-booking').classList.add('active');
}

function goBackToCategory(){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-category').classList.add('active');
}

/* ---------------- BOOKING ---------------- */
function confirmBooking(){
  const address = document.getElementById('b-address').value.trim();
  const date = document.getElementById('b-date').value;
  const time = document.getElementById('b-time').value;
  const phone = document.getElementById('b-phone').value.trim();

  if(!address){ showToast('Please add a service address'); return; }
  if(!date || !time){ showToast('Please choose a date and time'); return; }
  if(!phone){ showToast('Please add a contact number'); return; }

  const pkg = state.draft.pkg;
  state.orderCounter += 1;
  const order = {
    id: state.orderCounter,
    category: state.draft.category,
    pkg: pkg,
    address, date, time, phone,
    notes: document.getElementById('b-notes').value.trim(),
    status: 'confirmed',
    createdAt: Date.now(),
    provider: null,
    timers: [],
  };
  state.orders.unshift(order);
  state.activeOrderId = order.id;
  sendOrderToWhatsApp(order);
  startTracking(order);
}

/* ---------------- SEND ORDER TO OWNER VIA WHATSAPP ---------------- */
function sendOrderToWhatsApp(order){
  const customerName = state.profile.name || 'New customer';
  const lines = [
    `*New booking – Yahweh Cleaning Service*`,
    `Order #${order.id}`,
    `Service: ${order.pkg.name}`,
    `Price: N$${order.pkg.price}`,
    `Customer: ${customerName}`,
    `Phone: ${order.phone}`,
    `Address: ${order.address}`,
    `Date: ${order.date} at ${order.time}`,
    order.notes ? `Notes: ${order.notes}` : null,
  ].filter(Boolean).join('\n');

  const url = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(lines)}`;
  window.open(url, '_blank');
}

/* ---------------- TRACKING SIMULATION ---------------- */
function startTracking(order){
  document.getElementById('track-code').textContent = 'Order #' + order.id;
  document.getElementById('provider-card').style.display = 'none';
  renderTrackingTimeline(order);
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('bottom-nav').style.display = 'flex';
  document.getElementById('screen-tracking').classList.add('active');

  order.timers.forEach(t=>clearTimeout(t));
  order.timers = [];

  TRACK_STEPS.forEach((step, i)=>{
    if(i===0) return; // already confirmed
    const t = setTimeout(()=>{
      order.status = step.key;
      if(step.key==='assigned'){
        order.provider = PROVIDER_NAMES[Math.floor(Math.random()*PROVIDER_NAMES.length)];
        showProviderCard(order);
      }
      if(state.activeOrderId === order.id){
        renderTrackingTimeline(order);
        updateTrackHeader(order);
      }
      renderActiveOrderSlot();
    }, step.delay);
    order.timers.push(t);
  });
}

function updateTrackHeader(order){
  const map = {
    confirmed:['Booking confirmed','A provider will be assigned shortly'],
    assigned:['Provider assigned','Your provider is getting ready'],
    enroute:['Provider en route','On the way to your address'],
    progress:['Service in progress','Your team is working on it'],
    done:['Service completed','Thank you for booking with us!'],
  };
  document.getElementById('track-title').textContent = map[order.status][0];
  document.getElementById('track-sub').textContent = map[order.status][1];
}

function showProviderCard(order){
  document.getElementById('provider-card').style.display = 'flex';
  document.getElementById('provider-avatar').textContent = order.provider.charAt(0);
  document.getElementById('provider-name').textContent = order.provider;
  const vehicleLabel = order.category==='car' ? 'Mobile wash unit · ⭐ 4.9' : 'Service team · ⭐ 4.8';
  document.getElementById('provider-meta').textContent = vehicleLabel;
}

function renderTrackingTimeline(order){
  const container = document.getElementById('timeline');
  container.innerHTML = '';
  const currentIndex = TRACK_STEPS.findIndex(s=>s.key===order.status);
  TRACK_STEPS.forEach((step, i)=>{
    const div = document.createElement('div');
    let cls = 'pending';
    if(i < currentIndex) cls = 'done';
    if(i === currentIndex) cls = 'current';
    div.className = 'tl-item ' + cls;
    const timeLabel = i <= currentIndex ? new Date(order.createdAt + step.delay).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) : 'Pending';
    div.innerHTML = `
      <div class="dot-wrap">
        <div class="dot">${i < currentIndex ? '✓' : (i+1)}</div>
        ${i < TRACK_STEPS.length-1 ? '<div class="bar"></div>' : ''}
      </div>
      <div class="body">
        <div class="title">${step.title}</div>
        <div class="time">${timeLabel}</div>
      </div>
    `;
    container.appendChild(div);
  });
  updateTrackHeader(order);
}

function renderActiveOrderSlot(){
  const slot = document.getElementById('active-order-slot');
  const active = state.orders.find(o=>o.status!=='done');
  if(!active){ slot.innerHTML=''; return; }
  const map = {confirmed:'Booking confirmed', assigned:'Provider assigned', enroute:'Provider en route', progress:'Service in progress'};
  slot.innerHTML = `
    <div class="active-order" onclick="reopenTracking(${active.id})">
      <div class="pulse"></div>
      <div class="txt">
        <div class="t1">${active.pkg.name} — ${map[active.status] || 'In progress'}</div>
        <div class="t2">Order #${active.id} · Tap to track</div>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
    </div>
  `;
}

function reopenTracking(orderId){
  const order = state.orders.find(o=>o.id===orderId);
  if(!order) return;
  state.activeOrderId = order.id;
  document.getElementById('track-code').textContent = 'Order #' + order.id;
  if(order.provider){ showProviderCard(order); } else { document.getElementById('provider-card').style.display='none'; }
  renderTrackingTimeline(order);
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('bottom-nav').style.display = 'flex';
  document.getElementById('screen-tracking').classList.add('active');
}

/* ---------------- ORDERS LIST ---------------- */
function renderOrders(){
  const list = document.getElementById('orders-list');
  if(state.orders.length===0){
    list.innerHTML = `<div class="empty-state"><div class="em">🧾</div>No orders yet.<br>Book a service from the Home tab.</div>`;
    return;
  }
  list.innerHTML = '';
  state.orders.forEach(order=>{
    const isDone = order.status==='done';
    const div = document.createElement('div');
    div.className = 'order-row';
    div.onclick = ()=> reopenTracking(order.id);
    div.innerHTML = `
      <div>
        <div class="o-name">${order.pkg.name}</div>
        <div class="o-meta">Order #${order.id} · ${order.date} at ${order.time}</div>
      </div>
      <span class="status-chip ${isDone ? 'chip-done' : 'chip-progress'}">${isDone ? 'Completed' : 'In progress'}</span>
    `;
    list.appendChild(div);
  });
}

/* ---------------- PROFILE ---------------- */
function renderProfile(){
  document.getElementById('p-name').value = state.profile.name;
  document.getElementById('p-phone').value = state.profile.phone;
  document.getElementById('p-address').value = state.profile.address;
  updateProfileHeader();
}
function updateProfileHeader(){
  const name = state.profile.name || 'Guest customer';
  document.getElementById('profile-name-display').textContent = name;
  document.getElementById('profile-phone-display').textContent = state.profile.phone || 'Add your details below';
  document.getElementById('profile-initial').textContent = name.charAt(0).toUpperCase();
}
function saveProfile(){
  state.profile.name = document.getElementById('p-name').value.trim();
  state.profile.phone = document.getElementById('p-phone').value.trim();
  state.profile.address = document.getElementById('p-address').value.trim();
  if(state.profile.address){ document.getElementById('home-address').textContent = state.profile.address; }
  updateProfileHeader();
  showToast('Details saved');
}

/* ---------------- TOAST ---------------- */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}

/* ---------------- GREETING ---------------- */
(function initGreeting(){
  // no persistence — fresh session each load, matching in-memory only design
})();
</script>
</body>
</html>
