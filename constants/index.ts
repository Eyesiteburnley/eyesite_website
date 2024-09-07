import { faGlasses, faMicroscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Description from "@/components/Description";

// NAVIGATION
export const NAV_LINKS = [
    { href: '/about', key: 'about', label: 'About' },
    { href: '/services', key: 'our_services', label: 'Our Services' },
    { href: '/expect', key: 'what_to_expect', label: 'What to Expect' },
    { href: '/contact', key: 'contact_us', label: 'Contact Us' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
  ];
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Providing Excellent Patient Customer Service',
      icon: '/user.svg',
      variant: 'green',
      description:
        "We ensure personalized care, attentive listening, and tailored solutions to meet each patient's unique vision needs, guaranteeing a comfortable and satisfying experience.",
    },
    {
      title: 'Providing a comprehensive eye examination using the latest technology',
      icon: '/user-doctor-solid.svg',
      variant: 'green',
      description:
        "Ensuring accurate diagnoses, personalised care, and optimal vision solutions, enhancing your eye health with precision and advanced diagnostic tools.",
    },
    {
      title: 'Provide Tailored advice and excellent aftercare',
      icon: '/check-solid.svg',
      variant: 'green',
      description:
        'We offer personalised recommendations to suit your eye needs and continuous support, ensuring your vision remains clear and comfortable long after your visit.',
    },
  ];

  export const OFFERS = [
    {
      service:'Designer Frames',
      offerDetails:'Buy one get one free on selected frames.',
      expiryDate:'Ongoing Offers'
    },
    {
      service:'Contact Lenses',
      offerDetails:'Free contact lens trial',
      expiryDate:'Ongoing Offers'
    },
    {
      service:'OCT Scan',
      offerDetails:'OCT Scans at £10 for a limited period',
      expiryDate:'Ongoing Offers'
    },
    {
      service:'Contact Lenses',
      offerDetails:'Buy 2 months worth of contact lenses and get one month free - includes single vision, toric, multifocal, monthly and daily lenses.',
      expiryDate:'14/08/24'
    },
    {
      service:'Designer Frames',
      offerDetails:'Ted Baker frames - 2 for £195 including single vision lenses',
      expiryDate:'Ongoing Offers'
    },
    {
      service:'Eye Exam',
      offerDetails:'Free Eye exams for a limited period',
      expiryDate:'Ongoing Offers'
    },

  ]

  export const OFFER_BOX = [
    {
      alt:'Eye exam Offer',
      image:'/eye_exam_offer.jpeg',
    },
    {
      alt:'Contact Lens Offer',
      image:'/contact_lens_offer.jpeg',
    },
    {
      alt:'Bogof Offer',
      image:'/blue_light_offer.jpeg',
    },
    {
      alt:'Bogof Offer',
      image:'/bogof_offer.jpeg',
    },

  ]

  export const STAFF_INFO = [
    {
      name:'Jane',
      img:'/staff_jane.jpeg',
      desc:'is our Qualified Dispensing Optician for 23 years. She has been in the profession for 40 years.'
    },
    {
      name:'Amir',
      img:'/staff_amir.jpeg',
      desc:'is our Optometrist who has been qualified for 16 years. He has been in the profession for 20 years.'
    },
    {
      name:'Elizabeth',
      img:'/staff_elizabeth.jpeg',
      desc:'has been in the Optical Industry for over 15 years. More recently she used to work for a major eye hospital.'
    },
  ]
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Quick Links',
      links: [
        'About eyesite',
        'What to Expect',
        'Our Services',
        'Privacy Policy',
        'Contact Us',
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Our Number', value: '01282 420 555' },
      { label: 'Our Email', value: 'eyesiteburnley@gmail.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };

  export const SLIDER_IMAGES = [
    {
      id: 1,
      src: "/HH2 Large.jpeg",
      title: "",
      desc: "Black coffee is a beverage made from roasted coffee beans. The beans are ground and soaked in water, which releases their flavor, color, caffeine content, and nutrients. ",
    },
    {
      id: 2,
      src: "/HH1 Large.jpeg",
      title: "Cappuccino",
      desc: "A cappuccino is an espresso-based coffee drink that is traditionally prepared with steamed milk foam (microfoam). Cappuccino. Type, Hot.",
    },
    {
      id: 3,
      src: "/HH3 Large.jpeg",
      title: "Espresso",
      desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
    },
  ]

  

  