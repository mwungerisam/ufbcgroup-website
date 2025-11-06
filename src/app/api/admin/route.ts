import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const BLOG_FILE = path.join(DATA_DIR, 'blog.json');
const PORTFOLIO_FILE = path.join(DATA_DIR, 'portfolio.json');

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  try {
    if (type === 'blog') {
      const data = await fs.readFile(BLOG_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    }
    if (type === 'portfolio') {
      const data = await fs.readFile(PORTFOLIO_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(data));
    }
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { type, item } = await request.json();
  try {
    if (type === 'blog') {
      const data = JSON.parse(await fs.readFile(BLOG_FILE, 'utf-8'));
      data.push(item);
      await fs.writeFile(BLOG_FILE, JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true });
    }
    if (type === 'portfolio') {
      const data = JSON.parse(await fs.readFile(PORTFOLIO_FILE, 'utf-8'));
      data.push(item);
      await fs.writeFile(PORTFOLIO_FILE, JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  const { type, item } = await request.json();
  try {
    if (type === 'blog') {
      let data = JSON.parse(await fs.readFile(BLOG_FILE, 'utf-8'));
      data = data.map((i: any) => (i.id === item.id ? item : i));
      await fs.writeFile(BLOG_FILE, JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true });
    }
    if (type === 'portfolio') {
      let data = JSON.parse(await fs.readFile(PORTFOLIO_FILE, 'utf-8'));
      data = data.map((i: any) => (i.id === item.id ? item : i));
      await fs.writeFile(PORTFOLIO_FILE, JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const { type, id } = await request.json();
  try {
    if (type === 'blog') {
      let data = JSON.parse(await fs.readFile(BLOG_FILE, 'utf-8'));
      data = data.filter((i: any) => i.id !== id);
      await fs.writeFile(BLOG_FILE, JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true });
    }
    if (type === 'portfolio') {
      let data = JSON.parse(await fs.readFile(PORTFOLIO_FILE, 'utf-8'));
      data = data.filter((i: any) => i.id !== id);
      await fs.writeFile(PORTFOLIO_FILE, JSON.stringify(data, null, 2));
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to delete data' }, { status: 500 });
  }
}