import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Users, 
  Sparkles, 
  Target, 
  Eye,
  Award,
  Star,
  BookOpen,
  MapPin,
  BadgeCheck,
  ChevronRight,
  Ribbon,
  Gem,
  Home,
  HandHelping,
  ArrowRight,
  Globe,
  School,
  Cross
} from 'lucide-react';

import aboutHero from '@/assets/general/g3.jpg';
import missionImage from '@/assets/general/hero-children.jpg';
import teamImage from '@/assets/general/c31.jpg';
import valuesImage from '@/assets/general/g.jpg';
import africaService from '@/assets/general/f3.jpg';

export const Mission = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeValue, setActiveValue] = useState(0);
  const canvasRef = useRef(null);

  const galleryImages = [
    {
      src: aboutHero,
      alt: 'Children in East Africa receiving education support'
    },
    {
      src: missionImage,
      alt: 'Community gathering for mentorship programs'
    },
    {
      src: teamImage,
      alt: 'Ray of Hope team providing care and support'
    },
    {
      src: valuesImage,
      alt: 'Children participating in educational activities'
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: 'Compassion & Dignity',
      description: 'Every child is created in the image of God and deserves love, dignity, and care.',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-200',
      initial: 'C'
    },
    {
      icon: Shield,
      title: 'Child Protection',
      description: 'We uphold the safety and protection of all children through trauma-informed and anti-abuse policies.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-200',
      initial: 'P'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'We build lasting change by equipping and partnering with local communities.',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-200',
      initial: 'E'
    },
    {
      icon: Star,
      title: 'Integrity & Transparency',
      description: 'We operate with honesty and provide transparent reporting to all stakeholders.',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-200',
      initial: 'I'
    },
    {
      icon: BookOpen,
      title: 'Education & Development',
      description: 'Empowering children through quality education and holistic development programs.',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-200',
      initial: 'E'
    },
    {
      icon: Gem,
      title: 'Stewardship',
      description: 'We use all resources wisely, ensuring compliance with Canadian nonprofit laws.',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-200',
      initial: 'S'
    },
    {
      icon: HandHelping,
      title: 'Inclusion & Respect',
      description: 'We serve all children regardless of background, reflecting Christ\'s inclusive love.',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-500/10',
      borderColor: 'border-teal-200',
      initial: 'I'
    },
    {
      icon: Cross,
      title: 'Faith & Servant Leadership',
      description: 'We lead with humility and serve others in the love and example of Jesus Christ.',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-200',
      initial: 'F'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Auto-rotate gallery images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Auto-rotate active value
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % coreValues.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [coreValues.length]);

  // Animated background bubbles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const bubbles = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 50 + 20,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.08 + 0.02
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      bubbles.forEach(bubble => {
        bubble.y -= bubble.speed;
        if (bubble.y < -bubble.radius) {
          bubble.y = canvas.height + bubble.radius;
          bubble.x = Math.random() * canvas.width;
        }

        const gradient = ctx.createRadialGradient(
          bubble.x, bubble.y, 0,
          bubble.x, bubble.y, bubble.radius
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${bubble.opacity})`);
        gradient.addColorStop(1, `rgba(147, 197, 253, ${bubble.opacity * 0.2})`);

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/10 overflow-hidden">
      {/* Animated Bubble Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-200/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Geometric shapes */}
        <div className="absolute left-0 top-1/4 w-32 h-32 opacity-5">
          <svg viewBox="0 0 200 200" className="text-blue-500 w-full h-full">
            <polygon points="100,0 0,200 200,200" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute right-0 bottom-1/3 w-40 h-40 opacity-5">
          <svg viewBox="0 0 200 200" className="text-indigo-500 w-full h-full">
            <circle cx="100" cy="100" r="90" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div variants={itemVariants} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                </div>
              ))}

              {/* Gallery indicators */}
              <div className="absolute bottom-8 left-8 z-10 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImage
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium text-blue-600 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  East & Central Africa
                </span>
              </div>
              <div className="absolute top-20 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium text-white flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4" />
                  Registered in Canada
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200/50 shadow-sm">
                <Sparkles className="w-5 h-5 text-blue-600 animate-pulse" />
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  ABOUT RAY OF HOPE COMMUNITY
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Restoring Hope{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  For Vulnerable Children
                </span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>

              <p className="text-xl text-gray-600 leading-relaxed">
                Ray of Hope Community is a faith-based humanitarian organization dedicated to supporting 
                orphaned and vulnerable children—especially those impacted by war, displacement, and poverty. 
                We are driven by love, guided by Christian compassion, and committed to rebuilding lives through 
                education, protection, and holistic care. Founded in response to the increasing number of orphaned 
                children in East and Central Africa, our work centers on restoring dignity, strengthening hope, 
                and developing future leaders in the most underserved regions.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center font-semibold"
                  >
                    Our Full Story
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link to="/programs">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg group flex items-center font-semibold transition-all duration-300"
                  >
                    Our Programs
                    <School className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl shadow-blue-100/50 border border-blue-100/50 hover:shadow-3xl hover:shadow-blue-200/30 transition-all duration-500 h-full group">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Mission</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To support, educate, and protect orphaned and vulnerable children by providing holistic care, 
                educational opportunities, and safe, loving environments—empowering them to become who God 
                created them to be.
              </p>
              
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-blue-100/50">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Heart className="w-4 h-4 text-rose-600" />
                  <span>Holistic Care</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 text-green-600" />
                  <span>Education Focus</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 h-full flex flex-col">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mr-6 border border-white/30 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">Our Vision</h3>
                    <div className="w-12 h-1 bg-white/60 rounded-full mt-2"></div>
                  </div>
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-6 flex-grow">
                  "To see a generation of once-forgotten children rise up with dignity, hope, and the tools they need to 
                  transform their communities and nations."
                </blockquote>
                
                <div className="flex items-center gap-4 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Hope Driven</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-300" />
                    <span>Community Transformation</span>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/5 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>

          {/* Core Values Section */}
          <motion.div variants={itemVariants} className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-blue-200/50">
                <Ribbon className="w-5 h-5 text-blue-600" />
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  OUR FOUNDATION
                </span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Core Values
                </span>
              </h3>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These fundamental principles guide every aspect of our work and define who we are as a faith-based 
                humanitarian organization serving vulnerable children in East and Central Africa.
              </p>
            </div>

            {/* Radial Values Layout - Hidden on small screens */}
            <div className="hidden sm:block relative h-[600px] lg:h-[700px] items-center justify-center">
              {/* Central Active Value Display */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center max-w-md mx-auto">
                  <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r ${coreValues[activeValue].color} flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110`}>
                    {(() => {
                      const IconComponent = coreValues[activeValue].icon;
                      return <IconComponent className="w-12 h-12 text-white" />;
                    })()}
                  </div>
                  <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {coreValues[activeValue].title}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {coreValues[activeValue].description}
                  </p>
                </div>
              </div>

              {/* Circular Value Items */}
              {coreValues.map((value, index) => {
                const angle = (index * 360) / coreValues.length;
                const radius = 280;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <motion.div
                    key={value.title}
                    className={`absolute w-24 h-24 lg:w-28 lg:h-28 rounded-2xl ${value.bgColor} border-2 ${value.borderColor} backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group flex items-center justify-center ${
                      index === activeValue 
                        ? 'scale-125 z-20 shadow-2xl border-white ring-4 ring-blue-200' 
                        : 'scale-100 hover:scale-110'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%) ${index === activeValue ? 'scale(1.25)' : 'scale(1)'}`,
                    }}
                    onClick={() => setActiveValue(index)}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-center">
                      <div className={`w-12 h-12 mx-auto mb-1 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                        <value.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                        {value.title.split(' ')[0]}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Connection Lines */}
              {coreValues.map((_, index) => {
                const angle = (index * 360) / coreValues.length;
                const radius = 280;
                
                return (
                  <div 
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      width: `${radius}px`,
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent, rgb(191 219 254) 20%, rgb(191 219 254) 80%, transparent)',
                      opacity: '0.6',
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: 'left center'
                    }}
                  />
                );
              })}

              {/* Central Orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 opacity-30 blur-xl animate-pulse"></div>
              </div>
            </div>

            {/* Active Value Display for Mobile */}
            <div className="sm:hidden mt-8 text-center">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${coreValues[activeValue].color} flex items-center justify-center shadow-lg`}>
                {(() => {
                  const IconComponent = coreValues[activeValue].icon;
                  return <IconComponent className="w-8 h-8 text-white" />;
                })()}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {coreValues[activeValue].title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {coreValues[activeValue].description}
              </p>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-12">
              {coreValues.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveValue(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeValue
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Africa Service Section */}
          <motion.div variants={itemVariants} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 backdrop-blur-sm border border-blue-100/50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600 rounded-full animate-float"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-600 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Serving{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      East & Central Africa
                    </span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    We are actively working in refugee camps in Kenya and Uganda, supporting vulnerable children 
                    with education, mentorship, and essential resources. Our future goals include expanding to 
                    post-conflict areas in Burundi and establishing a permanent Child Development Centre in the 
                    Democratic Republic of Congo.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span>Kenya & Uganda</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Award className="w-5 h-5 text-amber-600" />
                      <span>Future Expansion</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span>Child Protection Focus</span>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={africaService}
                    alt="African landscape representing our service areas"
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Link to="/get-involved">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center font-semibold mx-auto"
              >
                Join Our Mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};