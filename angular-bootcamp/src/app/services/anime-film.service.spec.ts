import { TestBed } from '@angular/core/testing';

import { AnimeFilmService } from './anime-film.service';

describe('AnimeFilmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimeFilmService = TestBed.get(AnimeFilmService);
    expect(service).toBeTruthy();
  });
});
