type Props = {
  params: {
    slug: string;
  };
};

// const places = [
//   { state: "Coahuila", cities: ["Melchor Muzquiz", "Torreon"] },
//   { state: "Durango", cities: ["Gomez Palacio", "Durango", "Nazas", "Rodeo"] },
//   { state: "Sinaloa", cities: ["Mazatlan"] },
// ];

export default function Page({ params }: Props) {
  return <p>Page: {params.slug}</p>;
}
