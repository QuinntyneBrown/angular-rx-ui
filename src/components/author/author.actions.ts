export class SelectAuthorAction { constructor(public entity) { } }

export class AddOrUpdateAuthorAction { constructor(public id, public entity) { } }

export class AllAuthorsAction { constructor(public id, public entities) { } }

export class RemoveAuthorAction { constructor(public id, public entity) { } }

export class AuthorsFilterAction { constructor(public id, public term) { } }

export class SetCurrentAuthorAction { constructor(public entity) { } }

export class AddOrUpdateAuthorSuccessAction { constructor(public entity) { } }

export class CurrentAuthorRemovedAction { constructor() { } }