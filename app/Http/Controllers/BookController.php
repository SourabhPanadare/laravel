<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Book;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $books = Book::all();
      return response()->json($books);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      $book = new Book([
        'isbn' => $request->get('isbn'),
        'title' => $request->get('title'),
        'image' => $request->get('image'),
        'author' => $request->get('author'),
        'description' => $request->get('description'),
        'published_year' => $request->get('published_year'),
        'publisher' => $request->get('publisher')
      ]);
      $book->save();

      return response()->json('Books Added Successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      $book = Book::find($id);
      return response()->json($book);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      $book = Book::find($id);
      $book->isbn = $request->get('isbn');
      $book->title = $request->get('title');
      $book->image = $request->get('image');
      $book->author = $request->get('author');
      $book->description = $request->get('description');
      $book->published_year = $request->get('published_year');
      $book->publisher = $request->get('publisher');
      $book->save();

      return response()->json('Book Updated Successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      $book = Book::find($id);
      $book->delete();

      return response()->json('Book Deleted Successfully.');
    }
}
