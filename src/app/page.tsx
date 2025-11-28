"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Star, Leaf, Handshake, User, Users, MessageCircle, HelpCircle, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="radialGradient"
      cardStyle="glass-flat"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Brew Haven"
          button={{
            text: "Order Online",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Coffee Crafted Daily"
          description="Discover our handpicked specialty beans and expertly crafted beverages in a cozy atmosphere designed for connection."
          tag="Fresh Roasts"
          tagIcon={Coffee}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764327078419-6jp8yxal.jpg"
          imageAlt="Brew Haven coffee shop interior"
          frameStyle="card"
          buttons={[
            {
              text: "View Menu",
              href: "#"
            },
            {
              text: "Visit Us",
              href: "contact"
            }
          ]}
          className="w-full"
          titleClassName="text-4xl md:text-5xl font-bold"
          descriptionClassName="text-lg md:text-xl"
        />
      </div>

      <div id="featured-drinks" data-section="featured-drinks">
        <FeatureCardThree
          title="Our Specialty Drinks"
          description="Hand-crafted beverages made from premium, ethically sourced coffee beans"
          tag="Best Sellers"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Signature Espresso",
              description: "Bold, rich espresso made from our house blend. Perfect as a shot or the base for any espresso drink.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764327079667-wn3ke4po.jpg",
              imageAlt: "Signature espresso"
            },
            {
              id: "02",
              title: "Silky Latte",
              description: "Smooth espresso with steamed milk and microfoam. Available hot or iced with your choice of milk.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764327081494-otal1nrk.jpg",
              imageAlt: "Creamy latte"
            },
            {
              id: "03",
              title: "Cold Brew",
              description: "Smooth, refreshing cold brew steeped for 24 hours. Low acidity, high flavor. Perfect iced.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764327082905-69k8svnw.jpg",
              imageAlt: "Iced cold brew"
            }
          ]}
          className="w-full"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="Founded in 2015, Brew Haven began with a simple mission: serve exceptional coffee and create a welcoming space for community."
          tag="Our Journey"
          tagIcon={Leaf}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764327084838-gxf16jbl.jpg"
          imageAlt="Skilled barista at work"
          bulletPoints={[
            {
              title: "Direct Trade",
              description: "We source coffee directly from farmers, ensuring quality and fair compensation.",
              icon: Handshake
            },
            {
              title: "Expert Baristas",
              description: "Our team is trained in specialty coffee preparation and passionate about craft.",
              icon: User
            },
            {
              title: "Community Hub",
              description: "More than coffee - we're a gathering place for neighbors and friends.",
              icon: Users
            }
          ]}
          className="w-full"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Loved by Our Community"
          description="Hear what coffee lovers have to say about their Brew Haven experience"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Local Resident",
              testimonial: "Best coffee shop in the neighborhood. The baristas know my order and the atmosphere is perfect for working or catching up with friends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764327086668-yw6pxslu.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "Remote Worker",
              testimonial: "I come here every morning. Their cold brew is exceptional and the wifi is reliable. It's my second home office.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764327087903-gabtud35.jpg",
              imageAlt: "Marcus Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Coffee Enthusiast",
              testimonial: "The single-origin beans are incredible. I've tried their Ethiopian and Colombian roasts - both phenomenal. Definitely a specialty coffee destination.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764327089540-ky2yhjvg.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Regular Customer",
              testimonial: "Owner is super friendly and genuinely cares about quality. The pastries pair perfectly with their drinks. Worth the visit!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764327091178-mzhntikf.jpg",
              imageAlt: "David Kim"
            }
          ]}
          className="w-full"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our coffee, hours, and services"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We're open Monday through Friday from 6:00 AM to 6:00 PM, Saturday 7:00 AM to 5:00 PM, and Sunday 8:00 AM to 4:00 PM. Closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer WiFi?",
              content: "Yes, we have complimentary high-speed WiFi for all customers. Just ask our baristas for the password."
            },
            {
              id: "3",
              title: "Can I order ahead?",
              content: "Absolutely! You can call us or order through our mobile app for pickup. We'll have your order ready when you arrive."
            },
            {
              id: "4",
              title: "Do you have dairy-free options?",
              content: "Yes, we offer oat, almond, soy, and coconut milk alternatives for all of our drinks at no extra charge."
            },
            {
              id: "5",
              title: "Where do you source your beans?",
              content: "We work directly with coffee farmers in Ethiopia, Colombia, Guatemala, and Peru. All our beans are ethically sourced and fresh roasted in-house."
            },
            {
              id: "6",
              title: "Do you accept reservations for events?",
              content: "Yes, we host private events and meetings. Contact us at events@brewhaven.com for availability and pricing."
            }
          ]}
          className="w-full"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated with Our Latest Roasts"
          description="Subscribe to our email list for weekly specials, new roasts, and exclusive coffee tips."
          tagIcon={Mail}
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your inbox. Unsubscribe anytime. No spam, just great coffee news."
          className="w-full"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Brew Haven"
          columns={[
            {
              items: [
                {
                  label: "Hours",
                  href: "#"
                },
                {
                  label: "Menu",
                  href: "#"
                },
                {
                  label: "Order Online",
                  href: "#"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Coffee",
                  href: "#"
                },
                {
                  label: "Careers",
                  href: "#"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "#"
                },
                {
                  label: "Events",
                  href: "#"
                }
              ]
            },
            {
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Accessibility",
                  href: "#"
                }
              ]
            }
          ]}
          className="w-full"
          logoClassName="text-2xl font-bold"
        />
      </div>
    </ThemeProvider>
  );
}