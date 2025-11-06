import { NextRequest, NextResponse } from 'next/server';

// In-memory blog post storage (for demo; use a database in production)
let blogPosts = [
  {
    id: 1,
    title: "The Future of Agriculture in Rwanda: Sustainable Practices and Technology Integration",
    excerpt: "Discover how modern agricultural practices combined with traditional knowledge are transforming Rwanda's farming sector.",
    content: "Rwanda's agricultural sector is undergoing a remarkable transformation...",
    author: "Dr. Emmanuel Niyonzima",
    date: "2024-03-15",
    category: "Agriculture",
    readTime: "5 min read",
    slug: "future-agriculture-rwanda",
    published: true
  },
  {
    id: 2,
    title: "Building Rwanda's Future: Sustainable Construction Practices in East Africa",
    excerpt: "Explore how UFBC is leading the way in sustainable construction across Rwanda.",
    content: "Rwanda's construction sector is experiencing unprecedented growth...",
    author: "Ing. Sarah Uwase",
    date: "2024-03-10",
    category: "Construction",
    readTime: "4 min read",
    slug: "sustainable-construction-rwanda",
    published: true
  }
];

// GET: List blog posts (with optional category, pagination)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');

    let filteredPosts = blogPosts.filter(post => post.published);

    if (category) {
      filteredPosts = filteredPosts.filter(post =>
        post.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return NextResponse.json({
      posts: paginatedPosts,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(filteredPosts.length / limit),
        totalPosts: filteredPosts.length,
        hasNextPage: endIndex < filteredPosts.length,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST: Create a new blog post (draft by default)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, excerpt, content, author, category, readTime } = body;

    // Validation
    if (!title || !excerpt || !content || !author || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newPost = {
      id: blogPosts.length + 1,
      title,
      excerpt,
      content,
      author,
      date: new Date().toISOString().split('T')[0],
      category,
      readTime: readTime || '5 min read',
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      published: false // Default to draft
    };

    blogPosts.push(newPost);

    return NextResponse.json(
      { message: 'Blog post created successfully', post: newPost },
      { status: 201 }
    );
  } catch (error) {
    console.error('Blog creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}