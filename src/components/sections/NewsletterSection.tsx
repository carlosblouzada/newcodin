import React, { useState } from 'react';
import Button from '../ui/Button';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="bg-primary-500 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Receba conteúdos exclusivos sobre gestão de pessoas
          </h2>
          <p className="text-primary-50 mb-8">
            Inscreva-se em nossa newsletter e receba as últimas novidades, artigos e dicas sobre RH estratégico.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 text-white p-4 rounded-lg">
              Inscrição realizada com sucesso! Em breve você receberá nossos conteúdos.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                className="md:w-auto"
              >
                Inscrever-se
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;