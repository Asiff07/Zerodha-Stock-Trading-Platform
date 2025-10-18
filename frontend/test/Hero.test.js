import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

//Test Suite
describe('Hero Component', () => {
  test('renders Hero image', () => {
    render(<Hero />);
    const heroImage = screen.getByAltText('HeroImage');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');;
  });


  test('renders Signup Button', () => {
    render(<Hero />);
    const signupBtn = screen.getByRole('button',{name:'Sign up for free'});
    expect(signupBtn).toBeInTheDocument();
    expect(signupBtn).toHaveClass('btn-primary');
  });
});