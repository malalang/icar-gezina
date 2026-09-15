export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      cars: {
        Row: {
          id: string;
          make: string;
          model: string;
          year: number;
          price: number;
          mileage: number;
          fuel_type: string;
          transmission: string;
          body_type: string;
          color: string;
          image_url: string;
          gallery_urls: string[];
          description: string;
          features: string[];
          created_at: string;
        };
        Insert: {
          id?: string;
          make: string;
          model: string;
          year: number;
          price: number;
          mileage: number;
          fuel_type: string;
          transmission: string;
          body_type: string;
          color: string;
          image_url: string;
          gallery_urls?: string[];
          description: string;
          features?: string[];
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          make: string;
          model: string;
          year: number;
          price: number;
          mileage: number;
          fuel_type: string;
          transmission: string;
          body_type: string;
          color: string;
          image_url: string;
          gallery_urls: string[];
          description: string;
          features: string[];
          created_at: string;
        }>;
        Relationships: [];
      };
      car_parts: {
        Row: {
          id: string;
          car_id: string;
          name: string;
          condition: string;
          description: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          car_id: string;
          name: string;
          condition: string;
          description: string;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          car_id: string;
          name: string;
          condition: string;
          description: string;
          created_at: string;
        }>;
        Relationships: [];
      };
      car_reviews: {
        Row: {
          id: string;
          car_id: string;
          author: string;
          rating: number;
          comment: string;
          date: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          car_id: string;
          author: string;
          rating: number;
          comment: string;
          date: string;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          car_id: string;
          author: string;
          rating: number;
          comment: string;
          date: string;
          created_at: string;
        }>;
        Relationships: [];
      };
      testimonials: {
        Row: {
          id: string;
          author: string;
          role: string;
          content: string;
          avatar: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          author: string;
          role: string;
          content: string;
          avatar: string;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          author: string;
          role: string;
          content: string;
          avatar: string;
          created_at: string;
        }>;
        Relationships: [];
      };
      leads: {
        Row: {
          id: string;
          car_id: string | null;
          type: string;
          name: string;
          email: string;
          phone: string;
          preferred_date: string | null;
          message: string | null;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          car_id?: string | null;
          type: string;
          name: string;
          email: string;
          phone: string;
          preferred_date?: string | null;
          message?: string | null;
          status?: string;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          car_id: string | null;
          type: string;
          name: string;
          email: string;
          phone: string;
          preferred_date: string | null;
          message: string | null;
          status: string;
          created_at: string;
        }>;
        Relationships: [];
      };
      articles: {
        Row: {
          id: string;
          title: string;
          slug: string;
          category: string | null;
          excerpt: string | null;
          content: string;
          cover_image_url: string | null;
          published: boolean;
          published_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          category?: string | null;
          excerpt?: string | null;
          content: string;
          cover_image_url?: string | null;
          published?: boolean;
          published_at?: string | null;
          created_at?: string;
        };
        Update: Partial<{
          id: string;
          title: string;
          slug: string;
          category: string | null;
          excerpt: string | null;
          content: string;
          cover_image_url: string | null;
          published: boolean;
          published_at: string | null;
          created_at: string;
        }>;
        Relationships: [];
      };
      profiles: {
        Row: {
          id: string;
          username: string | null;
          avatar_url: string | null;
          is_admin: boolean;
        };
        Insert: {
          id: string;
          username?: string | null;
          avatar_url?: string | null;
          is_admin?: boolean;
        };
        Update: Partial<{
          id: string;
          username: string | null;
          avatar_url: string | null;
          is_admin: boolean;
        }>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      car_condition: ("Excellent" | "Good" | "Fair" | "Needs Replacement")[];
    };
    CompositeTypes: Record<string, never>;
  };
};
