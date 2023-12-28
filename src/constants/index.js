import coffee1 from '../assets/deliveryService/coffee-cup 1.png'
import coffee2 from '../assets/deliveryService/coffee-cup 2.png'
import truck from '../assets/deliveryService/food-truck 1.png'
import instagram from '../assets/socialMedia/icons8-instagram-50.png'
import facebook from '../assets/socialMedia/icons8-facebook-50.png'
import linkedin from '../assets/socialMedia/icons8-linkedin-50.png'
import twitter from '../assets/socialMedia/icons8-twitter-50.png'
import { BsInstagram } from 'react-icons/bs'
export const navLinks = [
    {
      id: "home",
      title: "Home",
      to:'/'
    },
    {
      id: "aboutUs",
      title: "About us",
      to:'#aboutUs'
    },
    {
      id: "reviews",
      title: "Reviews",
      to:'#reviews'
    },
   
  ];

  export const deliveryService=[
    {
      image:coffee1,
      para1:'choose your coffee',
      para2:'there are 20+ coffees for you'
    },
    {
      image:truck,
      para1:'we delivery it to you',
      para2:'Choose delivery service'
    },
    {
      image:coffee2,
      para1:'Enjoy your coffee',
      para2:'Choose delivery service'
    },
    
  ]

  export const footerLinks = [
    {
      title: "Quick Links",
      links: [
        {
          name: "Privacy Policy",
          link: "#",
        },
        {
          name: "CafeStreet Rewards Day Offer",
          link: "#",
        },
        {
          name: "Delivery",
          link: "#",
        },
        {
          name: "Season's Gifting",
          link: "#",
        },
        {
          name: "Terms & Services",
          link: "#",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Help Center",
          link: "#",
        },
        {
          name: "FAQ",
          link: "#",
        },
        {
          name: "Partners",
          link: "#",
        },
        {
          name: "Suggestions",
          link: "#",
        },
        {
          name: "Blog",
          link: "#",
        },
        {
          name: "Newsletters",
          link: "#",
        },
      ],
    },
    {
      title: "Partner",
      links: [
        {
          name: "Our Partner",
          link: "#",
        },
        {
          name: "Become a Partner",
          link: "#",
        },
      ],
    },
  ];
  
  export const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];