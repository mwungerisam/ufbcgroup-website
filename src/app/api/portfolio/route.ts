import { NextRequest, NextResponse } from 'next/server';

// In a real application, this would be a database
let portfolioItems = [
  {
    id: 1,
    title: "Kigali Business Center",
    category: "Construction",
    description: "A state-of-the-art LEED Gold certified office complex in the heart of Kigali's business district.",
    details: {
      client: "Rwanda Development Board",
      duration: "18 months",
      value: "$25M USD",
      team: "45 professionals",
      technologies: ["Green Building Materials", "Solar Panels", "Smart HVAC", "LED Lighting", "Water Recycling"]
    },
    challenges: "Meeting strict environmental standards while maintaining cost efficiency.",
    solutions: "Implemented modular construction techniques and renewable energy systems.",
    results: "Completed 3 months ahead of schedule, 40% reduction in energy consumption.",
    image: "/kigali-business-center.jpg",
    featured: true,
    published: true
  },
  {
    id: 2,
    title: "Rwanda Agricultural Innovation Hub",
    category: "Agriculture",
    description: "A comprehensive agricultural facility combining modern farming techniques with traditional knowledge.",
    details: {
      client: "Ministry of Agriculture",
      duration: "12 months",
      value: "$8M USD",
      team: "30 professionals",
      technologies: ["Precision Farming", "IoT Sensors", "Automated Irrigation", "Climate Control"]
    },
    challenges: "Integrating modern technology with existing farming practices.",
    solutions: "Conducted extensive community engagement and training programs.",
    results: "Increased crop yields by 60%, trained 200 local farmers.",
    image: "/agricultural-hub.jpg",
    featured: true,
    published: true
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');

    let filteredItems = portfolioItems.filter(item => item.published);

    // Filter by category if specified
    if (category) {
      filteredItems = filteredItems.filter(item => 
        item.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by featured if specified
    if (featured === 'true') {
      filteredItems = filteredItems.filter(item => item.featured);
    }

    // Apply limit if specified
    if (limit) {
      const limitNum = parseInt(limit);
      filteredItems = filteredItems.slice(0, limitNum);
    }

    return NextResponse.json({
      items: filteredItems,
      total: filteredItems.length
    });

  } catch (error) {
    console.error('Portfolio API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolio items' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      title, 
      category, 
      description, 
      details, 
      challenges, 
      solutions, 
      results, 
      image,
      featured = false 
    } = body;

    // Validation
    if (!title || !category || !description || !details) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new portfolio item
    const newItem = {
      id: portfolioItems.length + 1,
      title,
      category,
      description,
      details,
      challenges: challenges || '',
      solutions: solutions || '',
      results: results || '',
      image: image || '/placeholder.jpg',
      featured,
      published: false // Default to draft
    };

    portfolioItems.push(newItem);

    return NextResponse.json(
      { message: 'Portfolio item created successfully', item: newItem },
      { status: 201 }
    );

  } catch (error) {
    console.error('Portfolio creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create portfolio item' },
      { status: 500 }
    );
  }
} 