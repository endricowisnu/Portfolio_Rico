import React, { useRef, useState } from 'react'
import { Icon, InstagramIcon, LinkedinIcon, Mail, MapPin, Phone, Send } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import emailjs from "@emailjs/browser";
import { cn } from '../lib/utils'

export const ContactSection = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return
    if (!formRef.current) return
    setSending(true)
    
    const t = toast.loading("Mengirim...")

    try{
      await emailjs.sendForm(
        "service_456eeyt",
        "template_03qgi82",
        formRef.current,
        {publicKey: "x56CZgrMEkX0zyHKy"}
      );
      toast.update(t, {render: 'Terkirim!', type: 'success', isLoading: false, autoClose: 2500});
      formRef.current.reset()
    }catch (err) {
      toast.update(t, {render: 'Gagal mengirim', type: 'error', isLoading: false});
      console.error(err);
    } finally{
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In<span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className='text-left'>
                  <h4 className="font-medium">E-mail</h4>
                  <a href="mailto:endricowisnuwardhana@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    endricowisnuwardhana@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className='text-left'>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+6281339648022" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    +6281339648022
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-4 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className='text-left'>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">Yogyakarta, Indonesia</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://linkedin.com/endrico-wisnu-wardhana" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/endricowisnuu" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref = {formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Endrico Wisnu..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johndue@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled = {sending}
                className={cn('cosmic-button w-full flex items-center justify-center gap-2')}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="bottom-right" theme="dark" />
    </section>
  )
}
