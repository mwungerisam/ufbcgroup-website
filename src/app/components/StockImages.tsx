// Free stock image URLs for immediate use
// These are from Unsplash (free to use)

export const stockImages = {
  // Blog Images
  agriculture: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=400&fit=crop",
  construction: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop",
  technology: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
  logistics: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=400&fit=crop",
  
  // Portfolio Images
  kigaliBusinessCenter: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
  agriculturalHub: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop",
  digitalNetwork: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
  logisticsCenter: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
  creativeComplex: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
  foodProcessing: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
  
  // Generic Business Images
  office: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=400&fit=crop",
  meeting: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop",
  teamwork: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  
  // Rwanda-specific images (if available)
  rwanda: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop", // Kigali
  africa: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=400&fit=crop", // African landscape
};

// Image categories for easy selection
export const imageCategories = {
  agriculture: [stockImages.agriculture, stockImages.agriculturalHub],
  construction: [stockImages.construction, stockImages.kigaliBusinessCenter],
  technology: [stockImages.technology, stockImages.digitalNetwork],
  logistics: [stockImages.logistics, stockImages.logisticsCenter],
  business: [stockImages.office, stockImages.meeting, stockImages.teamwork],
  rwanda: [stockImages.rwanda, stockImages.africa],
}; 