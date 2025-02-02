interface CarouselItem {
    image: string;
    title: string;
}

export interface CarouselProps {
    items: CarouselItem[];
}