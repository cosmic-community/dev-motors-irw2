export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    icon?: string;
    summary?: string;
    description?: string;
    featured_image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    job_title?: string;
    bio?: string;
    photo?: CosmicImage;
    email?: string;
    linkedin_url?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    company?: string;
    job_title?: string;
    quote?: string;
    rating?: number;
    photo?: CosmicImage;
    related_service?: Service;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title?: string;
    client_name?: string;
    industry?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    featured_image?: CosmicImage;
    related_service?: Service;
    project_lead?: TeamMember;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}