export class AddOrUpdateArticleAction { constructor(public id, public entity) { } }

export class AllArticlesAction { constructor(public id, public entities) { } }

export class RemoveArticleAction { constructor(public id, public entity) { } }

export class ArticlesFilterAction { constructor(public id, public term) { } }

export class SetCurrentArticleAction { constructor(public entity) { } }

export class AddOrUpdateArticleSuccessAction { constructor(public entity) { } }

export class CurrentArticleRemovedAction { constructor() { } }