"use client";
import { useState, ChangeEvent, KeyboardEvent } from 'react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

import { useEffect, useRef } from 'react';

export default function Chatbot() {
  const chatAreaRef = useRef<HTMLDivElement>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Welcome to UNIQUE FORM BUSINESS COMPANY Ltd! I am your professional virtual assistant. UFBC proudly serves clients both in Rwanda and internationally. How may I assist you today regarding our services, global partnerships, or company information?' }
  ]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const suggestedPrompts = [
    'What services do you offer?',
    'Where are you located?',
    'How can I request a quote?',
    'Do you work internationally?',
    'What is your registration number?',
  ];

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Responsive behavior
  const [isSmall, setIsSmall] = useState<boolean>(false);
  useEffect(() => {
    const onResize = () => setIsSmall(window.innerWidth <= 480);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleSend = () => {
    if (uploadedImage) {
      setMessages(prev => [
        ...prev,
        { sender: 'user', text: '[Image uploaded]' },
        { sender: 'bot', text: 'Thank you for uploading your image! For more information or to submit files, please visit our contact page at https://ufbcgroup.com/contact or email us at ufbcltd@gmail.com.' }
      ]);
      setUploadedImage(null);
      setInput('');
      return;
    }
    const userMessage = input.trim();
    if (!userMessage) return;

    setMessages(prev => ([...prev, { sender: 'user', text: userMessage }]));
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      try {
        const reply = getBotReply(userMessage);
        setMessages(prev => ([...prev, { sender: 'bot', text: reply }]));
      } catch (e) {
        setMessages(prev => ([...prev, { sender: 'bot', text: 'Sorry, something went wrong processing your message. Please try again.' }]));
      } finally {
        setIsTyping(false);
      }
    }, 450);
  };

  // Helper for fuzzy matching
  function fuzzyIncludes(str: string, keywords: string[]): boolean {
    return keywords.some(keyword => {
      // Accept up to 2 character errors for short keywords
      const regex = new RegExp(keyword.split('').join('.?'), 'i');
      return str.match(regex);
    });
  }

  // Safe plain includes (no regex) for keywords that may contain special characters
  function includesAny(str: string, keywords: string[]): boolean {
    const s = str.toLowerCase();
    return keywords.some(k => s.includes(k.toLowerCase()));
  }

  const getBotReply = (msg: string): string => {
    const lowerMsg = msg.toLowerCase();

    const contactInfo = '\nFor more info, contact us at ufbcltd@gmail.com or visit https://ufbcgroup.com/contact';

    // Simple abuse detection (polite refusal)
    const abusive = [
      'idiot','stupid','dumb','fool','shut up','nonsense','hate you','trash','useless','moron',
      'screw you','f***','fuck','bitch','asshole','jerk','suck','kill','die','racist','sexist'
    ];
    if (includesAny(lowerMsg, abusive)) {
      return 'We promote respectful communication. Please avoid abusive language. If you have a service request or question, I’m here to help.' + contactInfo;
    }

    // Registration-related questions
    if (fuzzyIncludes(lowerMsg, [
      'registration', 'rc', 'certificate', 'legal', 'registation', 'regstration', 'tin', 'tax', 'taxpayer',
      'tax identification', 'tax id', 'tin number', 'is ufbc registered', 'is ufbc legal', 'is ufbc certified'
    ])) {
      return 'Our Registration Certificate (RC) number is 108584133. Our Tax Identification Number (TIN) is 108584133. We are fully registered and certified to operate in Rwanda.' + contactInfo;
    }

    // What is UFBC
    if (
      fuzzyIncludes(lowerMsg, [
        'what is ufbc',
        'ufbc meaning',
        'ufbc full name',
        'what does ufbc stand for',
        'about ufbc'
      ])
    ) {
      return (
  'UFBC stands for UNIQUE FORM BUSINESS COMPANY Ltd. We are a legally registered multi-sectoral company based in Kigali, Rwanda, operating across 28 sectors and providing a wide range of business solutions.' +
        contactInfo
      );
    }

    // What is unique form business
    if (
      fuzzyIncludes(lowerMsg, [
        'what is unique form business',
        'unique form business',
        'unique form business company',
        'about unique form business'
      ])
    ) {
      return (
        'UNIQUE FORM BUSINESS COMPANY Ltd provides the following services:\n' +
        '- Construction (building, roads, civil engineering)\n' +
        '- Mining & Quarrying\n' +
        '- Agriculture & Forestry\n' +
        '- Logistics & Courier\n' +
        '- Wholesale & Supply\n' +
        '- Food & Hospitality\n' +
        '- Telecommunication & IT\n' +
        '- Creative & Professional\n' +
        '- Administrative & Support\n' +
        '- Renting Houses, Equipment & Vehicles\n' +
        '- Software Development Solutions\n' +
        '- Manufacturing Technology\n' +
        '- Business Analysis\n' +
        '- Project Requirement Analysis\n' +
        'For more details, visit our Services page or ask about a specific sector.' +
        contactInfo
      );
    }

    if (fuzzyIncludes(lowerMsg, ['hello','helo','hi','hey','greetings','good morning','good afternoon','good evening','morning','afternoon','evening'])) return 'Greetings! Welcome to UNIQUE FORM BUSINESS COMPANY Ltd. We serve both local and international clients with professionalism and care. How can I assist you today?' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['construction','constrction','construcion','constrct','civil engineering','building','roads'])) return 'Yes, we offer construction services including building, roads, and civil engineering. We manage end-to-end projects from planning to delivery.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['mining','minig','minin','ming'])) return 'We provide lignite mining, stone quarrying, and mining support services.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['agriculture','agricuture','agricultre','agric','farming','seed'])) return 'We support crop production, animal farming, seed processing, post-harvest handling, and forestry services.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['contact','contct','contat','email','phone','phne','call','mail'])) return 'You can reach us at ufbcltd@gmail.com or +250 783 654 015. You can also use our contact page for more options at https://ufbcgroup.com/contact.';
  if (fuzzyIncludes(lowerMsg, ['location','locaton','locaion','address','adress','where','based'])) return 'Our headquarters are in Kigali, Rwanda. We also support remote and international clients. For global inquiries, please contact us via email or our website.' + contactInfo;
  if (fuzzyIncludes(lowerMsg, ['instagram','twitter','social','media','follow','connect'])) return 'You can follow us on Instagram and Twitter for updates. Find links in our website footer.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['owner','ceo','director','manager','leadership','founder','Joseph','Joseph Musorini','who owns','who is the owner','who founded','who is the ceo'])) return 'UNIQUE FORM BUSINESS COMPANY Ltd was founded and is owned by Joseph Musorini. He leads the company as CEO, supported by a professional management team.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['hours','open','close','working','time','schedule'])) return 'Our business hours are Monday to Friday, 8:00 AM to 5:00 PM. You can contact us anytime via email.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['food','fod','restaurant','resturant','hospitality','hosptality'])) return 'Yes, we provide food services including catering and mobile restaurants.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['admin','admn','cleaning','clening','office','ofice'])) return 'We offer cleaning, photocopying, and office administrative services.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['services','servics','sectors','sectrs','offer','provided','provide','do you offer','what do you offer','what services','catalog','list'])) {
      return (
        'UNIQUE FORM BUSINESS COMPANY Ltd offers the following sectors and services:\n' +
        '- Construction (building, roads, civil engineering)\n' +
        '- Mining & Quarrying\n' +
        '- Agriculture & Forestry\n' +
        '- Logistics & Courier\n' +
        '- Wholesale & Supply\n' +
        '- Food & Hospitality\n' +
        '- Telecommunication & IT\n' +
        '- Creative & Professional\n' +
        '- Administrative & Support\n' +
        '- Renting Houses, Equipment & Vehicles\n' +
        '- Software Development Solutions\n' +
        '- Manufacturing Technology\n' +
        '- Business Analysis\n' +
        '- Project Requirement Analysis\n' +
        'For more details, visit our Services page or ask about a specific sector.' + contactInfo
      );
    }
    if (fuzzyIncludes(lowerMsg, ['logistics','courier','delivery','transport'])) return 'We provide courier, logistics, and export support across Rwanda and East Africa.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['retail','wholesale','supply','procurement'])) return 'We handle wholesale and supply for agricultural products, food, tobacco, and general goods.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['it','telecom','internet','software','website','app'])) return 'Telecom & IT: networking, wireless solutions, software development (web/mobile), and information services.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['creative','design','photo','photography','branding'])) return 'Creative & Professional: design, branding, photography, and technical consulting.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['admin support','photocopy','office support','cleaning'])) return 'Admin & Support: cleaning, office support, photocopying and more.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['rental','renting','hire','equipment','vehicle','house'])) return 'We rent houses, equipment, and vehicles with flexible terms.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['pricing','rates','quote','quotation','estimate','how much'])) return 'Pricing depends on scope and timeline. Share your requirements and we will provide a tailored quotation within 24–48 hours.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['payment terms','deposit','invoice','billing','payment methods'])) return 'We accept bank transfer, Mobile Money, and approved purchase orders. Payment schedules depend on the contract.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['timeline','delivery time','how long','turnaround'])) return 'Timelines vary by project. Typical small projects: 1–2 weeks; medium: 2–8 weeks; large: per contract.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['portfolio','case studies','examples','previous work'])) return 'Please visit our Portfolio page for selected projects. We can also share references on request.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['warranty','guarantee','support after','maintenance'])) return 'We provide post-project support and maintenance according to the service agreement.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['privacy','data','confidential'])) return 'We treat client data confidentially and follow strict privacy practices. NDAs are available on request.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['terms','conditions','contract'])) return 'Our standard terms cover scope, timeline, payment, confidentiality, and warranty. We can adapt to your procurement requirements.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['created','established','founded','start','when started','when created','when established','history','background','story'])) return 'UNIQUE FORM BUSINESS COMPANY Ltd was founded in 2019 by Joseph Musorini. Since then, we have grown to serve 28 sectors in Rwanda.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['how many sectors','number of sectors','how many services','number of services','how many employees','number of employees','team size'])) return 'UFBC operates across 28 sectors and offers a wide range of services. Our team consists of dedicated professionals in each sector.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['software','sofware','development','develpment','it'])) return 'We offer software development solutions, including web and mobile apps, IT consulting, and system integration.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['manufacturing','manfacturing','technology','technolgy'])) return 'Our manufacturing technology services include automation, equipment installation, and process optimization.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['business analysis','busines analysis','business anlysis'])) return 'We provide business process analysis, stakeholder interviews, solution design, and strategic planning for business growth.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['project requirement','projet requirement','project requirment'])) return 'We offer project requirement analysis, including requirements gathering, documentation, and feasibility studies.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['rent','rental','rnt','house','hous','vehicle','veicle','equipment','equipmnt'])) return 'We provide rental services for houses, equipment, and vehicles with flexible options and support.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['mission','mision','vision','vission','values','vales'])) return 'Our mission is to deliver innovative, reliable, and sustainable business solutions. Our vision is to be a leader in multi-sectoral services in Rwanda. Our values include integrity, excellence, and customer focus.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['team','staff','employees','people','members'])) return 'UFBC is powered by a dedicated team of professionals across all our sectors.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['history','background','story','founded','established'])) return 'UFBC was founded to provide comprehensive business solutions in Rwanda, growing to serve 28 sectors.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['awards','recognition','certification','accolades'])) return 'UFBC is recognized for excellence and holds all necessary certifications for operation in Rwanda.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['partners','partnerships','clients','customers'])) return 'We work with a wide range of partners and clients in Rwanda and beyond. Contact us for partnership opportunities.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['testimony','testimonial','testimonies','testimonials','reviews','feedback','customer feedback','client feedback'])) return 'UFBC is proud to have received positive testimonials from our clients and partners. They appreciate our professionalism, reliability, and commitment to delivering quality business solutions. For specific testimonials, please visit our website or contact us for references.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['payment','pay','invoice','billing','method'])) return 'We accept various payment methods. For details, please contact our office or visit the contact page.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['support','help','assistance','service'])) return 'Our support team is ready to assist you. Reach out via email, phone, or our contact page.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['career','job','vacancy','employment','work'])) return 'For career opportunities at UFBC, please check our website or contact us directly.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['price','pricing','cost','quote','quotation','how much','fees','charges'])) return 'Pricing for our services depends on your specific needs. Please contact us for a detailed quote or use our contact page to request a quotation.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['request quote','get quote','proposal','request proposal','service request'])) return 'To request a quote or proposal, please fill out the form on our contact page or email us at ufbcltd@gmail.com.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['covid','covid-19','coronavirus','safety','health','precautions'])) return 'UFBC follows all recommended COVID-19 safety measures to protect our clients and staff, including sanitization, distancing, and remote services where possible.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['sustainability','environment','eco','green','environmental policy'])) return 'UFBC is committed to sustainability and environmentally friendly practices in all our operations.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['community','csr','social responsibility','community involvement'])) return 'UFBC actively participates in community development and social responsibility initiatives in Rwanda.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['language','languages','speak','spoken'])) return 'Our team communicates professionally in English, French, and Kinyarwanda to support clients worldwide.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['international','global','outside rwanda','expansion','other countries'])) return 'UNIQUE FORM BUSINESS COMPANY Ltd serves both local and international clients. We welcome global partnerships, remote projects, and cross-border collaborations. Please contact us to discuss your needs, wherever you are.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['book','booking','appointment','schedule','reserve'])) return 'To book a service or schedule an appointment, please use our contact page or call us directly.' + contactInfo;
    if (fuzzyIncludes(lowerMsg, ['refund','cancellation','cancel','money back','policy'])) return 'Our refund and cancellation policies are client-friendly. For details, please contact our office or refer to our terms and conditions.' + contactInfo;

    return 'Thank you for reaching out to UNIQUE FORM BUSINESS COMPANY Ltd. If you have further questions or require assistance, please contact us at ufbcltd@gmail.com or +250 783 654 015. You can also visit our contact page at https://ufbcgroup.com/contact. We look forward to serving you, wherever you are located.';
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const openFilePicker = () => fileInputRef.current?.click();

  return (
    <div style={{ position: 'fixed', bottom: isSmall ? 'calc(16px + env(safe-area-inset-bottom, 0px))' : 24, right: isSmall ? 12 : 24, zIndex: 9999 }}>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: isSmall ? 56 : 64,
            height: isSmall ? 56 : 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1A237E 0%, #1976D2 100%)',
            color: '#fff',
            border: 'none',
            boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
            cursor: 'pointer',
            fontSize: 32,
            transition: 'background 0.2s',
          }}
          aria-label="Open chatbot"
          onMouseOver={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #111a5a 0%, #1557a6 100%)')}
          onMouseOut={e => (e.currentTarget.style.background = 'linear-gradient(135deg, #1A237E 0%, #1976D2 100%)')}
        >
          💬
        </button>
      )}
      {isOpen && (
        <div style={{
          width: isSmall ? 'min(92vw, 380px)' : 340,
          background: '#fff',
          color: '#222',
          padding: isSmall ? 16 : 20,
          borderRadius: 16,
          boxShadow: '0 6px 24px rgba(0,0,0,0.18)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: isSmall ? '70vh' : 'unset'
        }}>
          {/* Header with actions */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px',
            background: 'linear-gradient(90deg,#1A237E,#1976D2)', color: '#fff',
            borderRadius: 12, marginBottom: 10
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/logo.svg" alt="UFBC" style={{ width: 22, height: 22, objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <strong>UFBC Assistant</strong>
                <span style={{ fontSize: 12, opacity: 0.9 }}>{isTyping ? 'Typing…' : 'Online'}</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <button
                title="Minimize"
                onClick={() => setIsOpen(false)}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                aria-label="Minimize chatbot"
              >
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="10" width="14" height="2" rx="1" fill="currentColor"/>
                </svg>
              </button>
              <button
                title="Close"
                onClick={() => setIsOpen(false)}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.35)',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                aria-label="Close chatbot"
              >
                <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="6" y1="6" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="6" x2="6" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
          <div
              ref={chatAreaRef}
              className="chatbot-scroll"
              style={{
                flex: 1,
                minHeight: isSmall ? 150 : 180,
                maxHeight: isSmall ? '45vh' : 320,
                overflowY: 'auto',
                marginBottom: 12,
                marginTop: 6,
                background: '#f7f9fa',
                borderRadius: 8,
                padding: '8px 4px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                scrollbarWidth: 'thin',
                scrollbarColor: '#1976D2 #f7f9fa',
              }}
            >
              <style>{`
                /* For webkit browsers */
                .chatbot-scroll::-webkit-scrollbar {
                  width: 8px;
                }
                .chatbot-scroll::-webkit-scrollbar-thumb {
                  background: #1976D2;
                  border-radius: 4px;
                }
                .chatbot-scroll::-webkit-scrollbar-track {
                  background: #f7f9fa;
                }
              `}</style>

            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.sender === 'bot' ? 'left' : 'right',
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    background: msg.sender === 'bot' ? '#EEF2FF' : '#E8F5E9',
                    color: msg.sender === 'bot' ? '#111827' : '#0B4F2E',
                    borderRadius: 12,
                    padding: '10px 12px',
                    maxWidth: '80%',
                    fontSize: 14,
                    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {isTyping && (
              <div style={{ textAlign: 'left', marginBottom: 8 }}>
                <span style={{ display: 'inline-block', background: '#EEF2FF', color: '#111827', borderRadius: 12, padding: '10px 12px', fontSize: 14 }}>
                  Typing…
                </span>
              </div>
            )}
          </div>
          {/* Suggestions */}
          {messages.length <= 2 && (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 6 }}>
              {suggestedPrompts.map((p) => (
                <button key={p} onClick={() => { setInput(p); setTimeout(handleSend, 50); }} style={{ padding: '6px 10px', borderRadius: 16, border: '1px solid #e5e7eb', background: '#fff', fontSize: 12, cursor: 'pointer' }}>{p}</button>
              ))}
            </div>
          )}
          {/* Input row */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button onClick={openFilePicker} title="Attach" style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid #e5e7eb', background: '#f8fafc', cursor: 'pointer' }}>
              📎
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => setUploadedImage(reader.result as string);
                  reader.readAsDataURL(file);
                  setMessages(prev => ([...prev, { sender: 'user', text: '[Selected image]' }]));
                }
              }}
            />
            <input
              style={{
                flex: 1,
                padding: isSmall ? '9px 10px' : '10px 12px',
                color: '#222',
                background: '#f7f9fa',
                border: '1px solid #e3e3e3',
                borderRadius: 8,
                fontSize: isSmall ? 13 : 14,
                outline: 'none',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                transition: 'border 0.2s',
              }}
              value={input}
              placeholder="Type a message..."
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={e => (e.currentTarget.style.border = '1px solid #1976D2')}
              onBlur={e => (e.currentTarget.style.border = '1px solid #e3e3e3')}
            />
            <button onClick={handleSend} style={{ padding: isSmall ? '9px 12px' : '10px 14px', background: '#1A237E', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 600 }}>Send</button>
          </div>
          
        </div>
      )}
    </div>
  );
}