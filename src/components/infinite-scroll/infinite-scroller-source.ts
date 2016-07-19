export abstract class InfiniteScrollerSource {
    public abstract fetch(count: number);
    public abstract createTombstone();
    public abstract Render(item: any, div: HTMLElement);
}