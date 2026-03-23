const mi_url=new URL('https://www.google.com/search?q=nodejs&rlz=1C1CHBF_esPE1110PE1110&oq=nodejs&gs_lcrp=EgZjaHJvbWUyDAgAEEUYORixAxiABDIHCAEQABiABDIHCAIQABiABDIJCAMQABgKGIAEMgkIBBAAGAoYgAQyBwgFEAAYgAQyBwgGEAAYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgxNTYzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8')

console.log(mi_url.searchParams.get('q')) 
