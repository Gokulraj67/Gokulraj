import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import profileData from '@/data/profile.json';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_iqfma54',
        'template_v1q6ypy',
        formRef.current,
        '2MhY6OwJ5jucDzqG_'
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <Card className="shadow-card border-primary/10">
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Your Name" name="user_name" required />
              <Input type="email" placeholder="Your Email" name="user_email" required />
            </div>
            <Input placeholder="Subject" name="subject" required />
            <Textarea placeholder="Your Message" name="message" rows={6} required />

            {/* Send Button */}
           <Button
  type="submit"
  className="mt-4 w-48 mx-auto block px-6 py-3 text-sm font-medium rounded-md bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
>
  <Send size={16} className="mr-2 inline" />
  Send Message
</Button>

            {success && (
              <p className="text-green-600 text-sm mt-2 text-center">
                Message sent successfully!
              </p>
            )}
          </form>

          {/* Download Resume Button */}
          <a
            href="/Resume@Gokulraj.pdf"
            download
            className="mt-4 w-48 mx-auto block px-6 py-3 text-sm font-medium rounded-md bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 text-center"
          >
            <Download size={16} className="mr-2 inline" />
            Download Resume
          </a>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
