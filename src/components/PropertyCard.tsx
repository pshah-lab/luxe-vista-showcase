import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MapPin, Bed, Bath, Square, Calendar, Star } from 'lucide-react';
import ablogo from '../assets/Ablogo.png';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: string;
    images: string[];
    bedrooms: number;
    bathrooms: number;
    area: string;
    possession: string;
    featured?: boolean;
    status?: 'Ready to Move' | 'Under Construction' | 'Hot Property';
    rating?: number;
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [imageError, setImageError] = useState<{[key: string]: boolean}>({});

  const handleImageError = (index: number) => {
    setImageError(prev => ({ ...prev, [index]: true }));
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'Ready to Move': return 'default';
      case 'Hot Property': return 'destructive';
      case 'Under Construction': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="card-luxury rounded-3xl overflow-hidden group min-h-[700px]">
      {/* Image Slider - Increased Height */}
      <div className="relative h-80 overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="property-slider h-full"
          loop={true}
        >
          {property.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                {!imageError[index] ? (
                  <img
                    src={image}
                    alt={`${property.title} - View ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="w-full h-full bg-luxury-cream flex items-center justify-center">
                    <div className="text-center text-luxury-charcoal">
                      <Square className="w-16 h-16 mx-auto mb-3" />
                      <p className="text-base">Property Image</p>
                    </div>
                  </div>
                )}
                <div className="overlay-gradient absolute inset-0" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Badges - Increased Size */}
        <div className="absolute top-6 left-6 flex flex-col gap-3 z-10">
          {property.featured && (
            <Badge className="bg-luxury-gold text-luxury-charcoal shadow-glow border-0 px-4 py-2 text-sm">
              <img src={ablogo} alt="Featured" className="w-4 h-4 mr-2 inline-block" />
              Featured
            </Badge>
          )}
          {property.status && (
            <Badge variant={getStatusBadgeVariant(property.status)} className="shadow-elegant border-0 px-4 py-2 text-sm">
              {property.status}
            </Badge>
          )}
        </div>

        {/* Price - Increased Size */}
        <div className="absolute bottom-6 left-6 z-10">
          <div className="bg-luxury-charcoal/95 backdrop-blur-sm rounded-xl px-5 py-4 border border-luxury-gold/30">
            <span className="text-xl font-bold text-luxury-gold">{property.price}</span>
          </div>
        </div>

        {/* BHK Badge - Increased Size */}
        <div className="absolute top-6 right-6 z-10">
          <div className="bg-luxury-burgundy/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-luxury-burgundy/30">
            <span className="text-base font-bold text-white">{property.bedrooms} BHK</span>
          </div>
        </div>
      </div>

      {/* Content - Increased Padding and Font Sizes */}
      <div className="p-8 bg-gradient-to-br from-white to-luxury-cream/30">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-luxury-charcoal mb-3 group-hover:text-luxury-gold transition-smooth">
            {property.title}
          </h3>
          <div className="flex items-center text-luxury-burgundy mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="text-base font-medium">{property.location}</span>
          </div>
        </div>

        {/* Property Details - Increased Size */}
        <div className="grid grid-cols-3 gap-6 mb-8 text-base">
          <div className="flex items-center text-luxury-charcoal">
            <Bed className="w-5 h-5 mr-2 text-luxury-gold" />
            <span>{property.bedrooms} BHK</span>
          </div>
          <div className="flex items-center text-luxury-charcoal">
            <Bath className="w-5 h-5 mr-2 text-luxury-amber" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center text-luxury-charcoal">
            <Square className="w-5 h-5 mr-2 text-luxury-burgundy" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Possession & Rating - Increased Size */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center text-base text-luxury-charcoal">
            <Calendar className="w-5 h-5 mr-2 text-luxury-amber" />
            <span>{property.possession}</span>
          </div>
          {property.rating && (
            <div className="flex items-center">
              <Star className="w-5 h-5 text-luxury-gold fill-current mr-2" />
              <span className="text-base font-medium text-luxury-charcoal">{property.rating}</span>
            </div>
          )}
        </div>

        {/* Action Buttons - Increased Size */}
        <div className="flex gap-4">
          <Button 
            asChild 
            className="btn-luxury-primary flex-1 text-base py-3"
          >
            <Link to={`/projects/${property.id}`}>
              View Details
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="default"
            className="btn-luxury-outline px-6 py-3 text-base"
          >
            Enquire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;