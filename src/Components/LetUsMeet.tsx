import { useState } from "react";
import heroBg from "../assets/hero-bg.jpg";
import { Phone } from "lucide-react";

const LetUsMeet = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  // Updated color variables with more vibrant options
  const colors = {
    background: "hsl(0 0% 100%)",
    foreground: "hsl(215 25% 15%)",
    card: "hsl(0 0% 100%)",
    primary: "hsl(213 100% 25%)", // Deep blue
    primaryLight: "hsl(213 100% 35%)", // Lighter blue
    accent: "hsl(213 100% 45%)", // Bright blue for accents
    muted: "hsl(215 16% 47%)",
    border: "hsl(214 32% 91%)",
    primaryForeground: "hsl(0 0% 100%)",
    overlay: "hsla(0, 0%, 100%, 0.85)", // White overlay for readability
  };

  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: colors.background,
      color: colors.foreground,
      minHeight: "100vh",
      scrollBehavior: "smooth",
    }}>
      {/* Hero Section with Background Image */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "4rem",
        overflow: "hidden",
      }}>
        {/* Background Image with Gradient Overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", // Parallax effect
          zIndex: 1,
        }}>
          {/* Gradient Overlay */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(
              135deg,
              hsla(0, 0%, 100%, 0.95) 0%,
              hsla(0, 0%, 100%, 0.92) 50%,
              hsla(0, 0%, 100%, 0.88) 100%
            )`,
          }}></div>
          
          {/* Subtle Pattern Overlay */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(${colors.primary}10 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
            opacity: 0.3,
          }}></div>
        </div>

        {/* Animated Circles for Visual Interest */}
        <div style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.primary}05 0%, transparent 70%)`,
          zIndex: 1,
          animation: "float 20s ease-in-out infinite",
        }}></div>
        
        <div style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.accent}05 0%, transparent 70%)`,
          zIndex: 1,
          animation: "float 15s ease-in-out infinite reverse",
        }}></div>

        {/* Content */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3rem 1rem",
          minHeight: "calc(100vh - 4rem)",
          display: "flex",
          alignItems: "center",
        }}>
          <div style={{
            display: "grid",
            gap: "4rem",
            alignItems: "center",
            width: "100%",
          }} className="lg-grid">
            {/* Left Content - Brand Introduction */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
            }}>
              {/* Decorative Element */}
              <div style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
                width: "60px",
                height: "60px",
                border: `2px solid ${colors.primary}20`,
                borderRadius: "50%",
                zIndex: -1,
              }}></div>
              
              {/* Top tagline with icon */}
              <div style={{
                color: colors.primary,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                fontSize: "0.875rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
                position: "relative",
              }}>
                <span style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Forge Alliances
                </span>
                <div style={{
                  width: "3rem",
                  height: "2px",
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
                }}></div>
              </div>

              {/* Main heading with gradient */}
              <h1 style={{
                fontSize: "3rem",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
                letterSpacing: "-0.025em",
                background: `linear-gradient(135deg, ${colors.foreground}, ${colors.primary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Become a Partner
              </h1>

              {/* First paragraph */}
              <div style={{
                position: "relative",
                paddingLeft: "1.5rem",
                marginBottom: "2rem",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "3px",
                  background: `linear-gradient(to bottom, ${colors.primary}, ${colors.accent})`,
                  borderRadius: "2px",
                }}></div>
                <p style={{
                  fontSize: "1.125rem",
                  color: colors.muted,
                  lineHeight: 1.7,
                }}>
                  If you're looking to dive into the world of partnership and seek
                  a dynamic ally, look no further than Proactive Trading. Our
                  dedication to advanced solutions, inventive technology, and
                  unmatched support makes us the perfect choice for those aiming
                  to succeed in the partner domain.
                </p>
              </div>

              {/* Second paragraph */}
              <div style={{
                position: "relative",
                paddingLeft: "1.5rem",
              }}>
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "3px",
                  background: `linear-gradient(to bottom, ${colors.accent}, ${colors.primary})`,
                  borderRadius: "2px",
                }}></div>
                <p style={{
                  fontSize: "1.125rem",
                  color: colors.muted,
                  lineHeight: 1.7,
                }}>
                  At Proactive Trading, we prioritize nurturing mutually advantageous
                  relationships, guaranteeing that our partners not only have
                  access to a wide array of premium products but also receive the
                  essential resources and guidance to thrive in the competitive
                  market.
                </p>
              </div>

              {/* Stats or Features */}
              <div style={{
                display: "flex",
                gap: "2rem",
                marginTop: "2rem",
                paddingTop: "2rem",
                borderTop: `1px solid ${colors.border}`,
              }}>
                <div>
                  <div style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: colors.primary,
                    marginBottom: "0.25rem",
                  }}>100+</div>
                  <div style={{
                    fontSize: "0.875rem",
                    color: colors.muted,
                  }}>Partners</div>
                </div>
                <div>
                  <div style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: colors.primary,
                    marginBottom: "0.25rem",
                  }}>24/7</div>
                  <div style={{
                    fontSize: "0.875rem",
                    color: colors.muted,
                  }}>Support</div>
                </div>
                <div>
                  <div style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: colors.primary,
                    marginBottom: "0.25rem",
                  }}>99%</div>
                  <div style={{
                    fontSize: "0.875rem",
                    color: colors.muted,
                  }}>Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}>
              {/* Form Card with Glow Effect */}
              <div style={{
                backgroundColor: colors.card,
                boxShadow: `
                  0 20px 40px rgba(0, 0, 0, 0.08),
                  0 0 0 1px ${colors.border},
                  0 0 60px ${colors.primary}10
                `,
                borderRadius: "1rem",
                padding: "2.5rem",
                width: "100%",
                maxWidth: "32rem",
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${colors.border}`,
              }}>
                {/* Form background pattern */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "100px",
                  height: "100px",
                  background: `linear-gradient(135deg, ${colors.primary}05, transparent)`,
                  borderBottomLeftRadius: "100%",
                  zIndex: 0,
                }}></div>

                <div style={{ 
                  marginBottom: "2.5rem",
                  position: "relative",
                  zIndex: 1,
                }}>
                  <span style={{ 
                    color: colors.primary, 
                    fontWeight: 700, 
                    fontSize: "0.875rem",
                    letterSpacing: "0.1em",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}>
                    CONTACT US
                  </span>
                  <h2 style={{ 
                    fontSize: "2rem", 
                    fontWeight: 700, 
                    color: colors.foreground, 
                    letterSpacing: "-0.025em",
                    lineHeight: 1.2,
                  }}>
                    Drop us a message
                  </h2>
                  <p style={{
                    color: colors.muted,
                    fontSize: "0.9375rem",
                    marginTop: "0.5rem",
                  }}>
                    Get in touch to start our partnership journey
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                }}>
                  <div style={{ 
                    display: "grid", 
                    gap: "1rem",
                  }} className="sm-grid">
                    <div>
                      <label style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: colors.foreground,
                        marginBottom: "0.5rem",
                      }}>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={{
                          width: "100%",
                          padding: "0.875rem 1rem",
                          border: `1px solid ${colors.border}`,
                          backgroundColor: colors.card,
                          color: colors.foreground,
                          fontSize: "0.9375rem",
                          borderRadius: "0.5rem",
                          outline: "none",
                          transition: "all 0.3s",
                        }}
                        required
                      />
                    </div>
                    <div>
                      <label style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: colors.foreground,
                        marginBottom: "0.5rem",
                      }}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                          width: "100%",
                          padding: "0.875rem 1rem",
                          border: `1px solid ${colors.border}`,
                          backgroundColor: colors.card,
                          color: colors.foreground,
                          fontSize: "0.9375rem",
                          borderRadius: "0.5rem",
                          outline: "none",
                          transition: "all 0.3s",
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: colors.foreground,
                      marginBottom: "0.5rem",
                    }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="123-456-7890"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: `1px solid ${colors.border}`,
                        backgroundColor: colors.card,
                        color: colors.foreground,
                        fontSize: "0.9375rem",
                        borderRadius: "0.5rem",
                        outline: "none",
                        transition: "all 0.3s",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: colors.foreground,
                      marginBottom: "0.5rem",
                    }}>Your Comment</label>
                    <textarea
                      name="comment"
                      placeholder="Tell us about your partnership goals..."
                      value={formData.comment}
                      onChange={handleInputChange}
                      rows={4}
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: `1px solid ${colors.border}`,
                        backgroundColor: colors.card,
                        color: colors.foreground,
                        fontSize: "0.9375rem",
                        borderRadius: "0.5rem",
                        outline: "none",
                        transition: "all 0.3s",
                        resize: "none",
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: 1.5,
                      }}
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
                      color: colors.primaryForeground,
                      fontWeight: 600,
                      padding: "1rem 2rem",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "0.5rem",
                      fontSize: "0.9375rem",
                      letterSpacing: "0.025em",
                      marginTop: "0.5rem",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${colors.primaryLight}, ${colors.accent})`;
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 10px 25px ${colors.primary}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`;
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <span style={{ position: "relative", zIndex: 1 }}>
                      SEND MESSAGE
                    </span>
                    <div style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "0",
                      height: "0",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.1)",
                      transition: "all 0.5s",
                    }}></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            width: "3rem",
            height: "3rem",
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.primaryLight})`,
            color: colors.primaryForeground,
            borderRadius: "50%",
            boxShadow: `0 4px 20px ${colors.primary}30`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            zIndex: 50,
            transition: "all 0.3s",
            opacity: 0.9,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
            e.currentTarget.style.boxShadow = `0 8px 30px ${colors.primary}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.9";
            e.currentTarget.style.transform = "scale(1) rotate(0)";
            e.currentTarget.style.boxShadow = `0 4px 20px ${colors.primary}30`;
          }}
          aria-label="Scroll to top"
        >
          <svg style={{ width: "1.25rem", height: "1.25rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </section>

      {/* Animations and Responsive Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .lg-grid {
          animation: fadeIn 1s ease-out;
        }
        
        /* Input focus styles */
        input:focus, textarea:focus {
          border-color: ${colors.primary} !important;
          box-shadow: 0 0 0 3px ${colors.primary}15 !important;
          transform: translateY(-1px);
        }
        
        /* Responsive styles */
        @media (max-width: 1023px) {
          .lg-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          h1 {
            font-size: 2.5rem !important;
          }
          section {
            background-attachment: scroll !important;
          }
        }
        
        @media (min-width: 1024px) {
          .lg-grid {
            grid-template-columns: 1.2fr 1fr;
            gap: 4rem;
          }
        }
        
        @media (max-width: 640px) {
          .sm-grid {
            grid-template-columns: 1fr !important;
          }
          h1 {
            font-size: 2rem !important;
          }
          h2 {
            font-size: 1.5rem !important;
          }
        }
        
        @media (min-width: 641px) {
          .sm-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LetUsMeet;