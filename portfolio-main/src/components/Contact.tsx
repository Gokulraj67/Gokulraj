import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
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
      {/* ...previous code */}
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
            <Button type="submit" className="w-full bg-gradient-primary">
              <Send size={16} className="mr-2" />
              Send Message
            </Button>
            {success && (
              <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
            )}
          </form>
        </CardContent>
      </Card>
      {/* ...remaining code */}
    </section>
  );
};


export default Contact;