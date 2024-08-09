import React, { useState } from 'react';
import { Input, Textarea, Button, Card } from '@nextui-org/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <section className="contact py-12 px-6 md:py-24 md:px-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="form-container p-8 shadow-md" variant="bordered">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            {isSubmitted ? (
              <p className="text-green-600">Thank you for contacting us! We'll get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Input
                    fullWidth
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    size="lg"
                  />
                </div>
                <div className="mb-4">
                  <Input
                    fullWidth
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    size="lg"
                  />
                </div>
                <div className="mb-4">
                  <Textarea
                    fullWidth
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows={4}
                    size="lg"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  color="primary"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Details */}
          <Card className="contact-details p-8 shadow-md" variant="bordered">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4">Feel free to reach out to us through any of the following methods:</p>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                <strong>Address:</strong> 456 Farm Lane, Agrocity, Maharashtra 411001, India
              </li>
              <li className="mb-2">
                <strong>Phone:</strong> +91 (22) 1234-5678
              </li>
              <li className="mb-2">
                <strong>Email:</strong> support@agripulse.com
              </li>
              <li className="mb-2">
                <strong>Fax:</strong> +91 (22) 8765-4321
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
