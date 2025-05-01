import React from 'react';
import { Clock } from 'lucide-react';
import { BLOG_POSTS } from '../../constants/content';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Blog"
          subtitle="Conteúdo relevante sobre gestão de pessoas e RH estratégico"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map(post => (
            <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-primary-500 transition-colors">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-4">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime} de leitura</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/blog" 
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-500 text-primary-500 hover:bg-primary-50 rounded-md transition-colors duration-200"
          >
            Ver todos os artigos
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;