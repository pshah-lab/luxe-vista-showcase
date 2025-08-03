import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { MapPin, Bed, Bath, Square, Calendar, Star } from 'lucide-react';
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
    <div className="card-gradient rounded-2xl overflow-hidden shadow-luxury hover:shadow-glow transition-luxury group">
      {/* Image Slider */}
      <div className="relative h-64 overflow-hidden">
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
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <Square className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">Property Image</p>
                    </div>
                  </div>
                )}
                <div className="overlay-gradient absolute inset-0" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {property.featured && (
            <Badge className="bg-primary text-primary-foreground shadow-glow">
              <Star className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
          {property.status && (
            <Badge variant={getStatusBadgeVariant(property.status)} className="shadow-elegant">
              {property.status}
            </Badge>
          )}
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
            <span className="text-lg font-bold text-primary">{property.price}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
            {property.title}
          </h3>
          <div className="flex items-center text-muted-foreground mb-3">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.bedrooms} BHK</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Square className="w-4 h-4 mr-1" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Possession & Rating */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{property.possession}</span>
          </div>
          {property.rating && (
            <div className="flex items-center">
              <Star className="w-4 h-4 text-primary fill-current mr-1" />
              <span className="text-sm font-medium">{property.rating}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button 
            asChild 
            className="flex-1 shadow-glow hover:shadow-luxury"
          >
            <Link to={`/projects/${property.id}`}>
              View Details
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="px-4 hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            Enquire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;