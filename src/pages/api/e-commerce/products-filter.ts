// next
import { NextApiRequest, NextApiResponse } from 'next';
import { KeyedObject } from 'types/root';
import { Products } from 'types/e-commerce';

import { products } from 'data/e-commerce';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { filter } = req.body;

  if (filter.sort === 'high') {
    products.sort((a: Products, b: Products) => Number(b.offerPrice) - Number(a.offerPrice));
  }

  if (filter.sort === 'low') {
    products.sort((a, b) => Number(a.offerPrice) - Number(b.offerPrice));
  }

  if (filter.sort === 'popularity') {
    products.sort((a, b) => Number(b.popularity) - Number(a.popularity));
  }

  if (filter.sort === 'discount') {
    products.sort((a, b) => Number(b.discount) - Number(a.discount));
  }

  if (filter.sort === 'discount') {
    products.sort((a, b) => Number(b.discount) - Number(a.discount));
  }

  if (filter.sort === 'new') {
    products.sort((a, b) => Number(b.new) - Number(a.new));
  }

  const results = products.filter((product: KeyedObject) => {
    let searchMatches = true;

    if (filter.search) {
      const properties = ['name', 'description', 'rating', 'offerPrice', 'gender'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (product[property].toString().toLowerCase().includes(filter.search.toString().toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        searchMatches = false;
      }
    }

    const genderMatches = filter.gender.length > 0 ? filter.gender.some((item: string) => item === product.gender) : true;
    const categoriesMatches =
      filter.categories.length > 0 && filter.categories.some((category: string) => category !== 'all')
        ? filter.categories.some((category: string) => product.categories.some((item: string) => item === category))
        : true;
    const colorsMatches =
      filter.colors.length > 0 ? filter.colors.some((color: string) => product.colors.some((item: string) => item === color)) : true;

    const minMax = filter.price ? filter.price.split('-') : '';
    const priceMatches = filter.price ? product.offerPrice >= minMax[0] && product.offerPrice <= minMax[1] : true;
    const ratingMatches = filter.rating > 0 ? product.rating >= filter.rating : true;

    return searchMatches && genderMatches && categoriesMatches && colorsMatches && priceMatches && ratingMatches;
  });
  return res.status(200).json(results);
}
